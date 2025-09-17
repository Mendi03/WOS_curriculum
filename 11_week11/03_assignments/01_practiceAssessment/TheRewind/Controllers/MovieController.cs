using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheRewind.Models;
using TheRewind.ViewModels;

namespace TheRewind.Controllers;

[Route("movies")]
public class MovieController : Controller
{
    private readonly ApplicationContext _context;
    private readonly ILogger<MovieController> _logger;

    private const string SessionUserId = "userId";

    public MovieController(ApplicationContext context, ILogger<MovieController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet("")]
    public async Task<IActionResult> AllMovies()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var movies = await _context
        .Movies
        .AsNoTracking()
        .Select(m => new MovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            Genre = m.Genre,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            UserId = m.UserId,
            Username = m.User!.Username,
            AvgRating = m.Ratings.Average(m => m.userRating).ToString("F1"),
        }).ToListAsync();

        var vm = new MovieIndexViewModel
        {
            Movies = movies
        };

        return View(vm);
    }

    [HttpGet("new")]
    public IActionResult MovieForm()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var vm = new MovieFormViewModel();

        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("new")]
    public async Task<IActionResult> AddMovie(MovieFormViewModel vm)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }
        if (!ModelState.IsValid)
        {
            return View(nameof(MovieForm), vm);
        }

        // create new Movie
        var newMovie = new Movie
        {
            Title = vm.Title,
            Genre = vm.Genre,
            Description = vm.Description,
            ReleaseDate = vm.ReleaseDate,
            UserId = uid
        };

        await _context.Movies.AddAsync(newMovie);
        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(AllMovies));
    }

    [HttpGet("{movieId}/edit")]
    public async Task<IActionResult> EditMovie(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context.Movies.AsNoTracking().Where(m => m.Id == movieId).Select(m => new EditMovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            Genre = m.Genre,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            UserId = m.UserId
        }).FirstOrDefaultAsync();

        if (uid != vm!.UserId)
        {
            // return Forbid(); // forbid keeps returning a 500 error so I replaced it with a manual 403 instead
            _logger.LogWarning("Warning: Unauthorized attempt to delete movie {movieId} by unauthenticated user.", movieId);
            return StatusCode(403);
        }

        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("{movieId}/edit")]
    public async Task<IActionResult> UpdateMovie(int movieId, EditMovieViewModel viewModel)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        if (!ModelState.IsValid)
        {
            return View(nameof(EditMovie), viewModel);
        }

        var movie = await _context.Movies.FindAsync(movieId);

        if (movie == null)
        {
            return NotFound();
        }

        movie.Title = viewModel.Title;
        movie.Genre = viewModel.Genre;
        movie.Description = viewModel.Description;
        movie.ReleaseDate = viewModel.ReleaseDate;
        movie.UpdatedAt = DateTime.Now;

        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(MovieDetails), new { movieId = movie.Id });
    }

    [HttpGet("{movieId}/delete")]
    public async Task<IActionResult> DeleteMovie(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context.Movies.AsNoTracking().Where(m => m.Id == movieId).Select(m => new MovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            UserId = m.UserId
        }).FirstOrDefaultAsync();

        if (uid != vm!.UserId)
        {
            // return Forbid(); // forbid keeps returning a 500 error
            return StatusCode(403);
        }

        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("{movieId}/delete")]
    public async Task<IActionResult> RemoveMovie(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var movie = await _context.Movies.FindAsync(movieId);

        if (movie == null)
        {
            return NotFound();
        }

        _context.Remove(movie);
        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(AllMovies));
    }

    // --------------------Ratings--------------------------------

    [ValidateAntiForgeryToken]
    [HttpPost("{movieId}/rate")]
    public async Task<IActionResult> AddRating(int movieId, int rating)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        if (!(rating >= 1 && rating <= 5))
        {
            return RedirectToAction(nameof(MovieDetails), new { movieId = movieId });
        }

        var maybeRated = await _context
        .Ratings
        .Where(rating => rating.UserId == uid && rating.MovieId == movieId)
        .FirstOrDefaultAsync();

        if (maybeRated is null)
        {

            var newRating = new Rating
            {
                UserId = uid,
                MovieId = movieId,
                userRating = rating,
            };

            await _context.AddAsync(newRating);
            await _context.SaveChangesAsync();
        }
        else
        {
            // Console.WriteLine($"{maybeRated.Id} -------------------------");
            var existingRating = await _context.Ratings.FindAsync(maybeRated.Id);

            existingRating!.userRating = rating;
            existingRating.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

        }

        return RedirectToAction(nameof(MovieDetails), new { movieId = movieId });
    }

    [HttpGet("{movieId}")]
    public async Task<IActionResult> MovieDetails(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context.Movies.AsNoTracking().Where(m => m.Id == movieId).Select(m => new MovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            Genre = m.Genre,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            UserId = m.UserId,
            Username = m.User!.Username,
            TotalRatings = m.Ratings.Where(r => r.MovieId == movieId).ToList().Count,
            // Left this dereference warning because I need the value to be null whenever the user 
            // has not rated the movie. The check for null is done in the MovieDetails View.
            UserRating = m.Ratings
                        .FirstOrDefault(r => r.MovieId == movieId && r.UserId == uid)
                        .userRating,
            AvgRating = m.Ratings.Average(m => m.userRating).ToString("F1"),
            UsersThatHaveRated = m.Ratings.OrderByDescending(r => r.CreatedAt).Select(r => r.User!.Username).Take(5).ToList(),

        }).FirstOrDefaultAsync();

        // Console.WriteLine($"{vm.UserRating} -------------------------------");

        return View(vm);
    }

}