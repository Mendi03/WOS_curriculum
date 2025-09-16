using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheRewind.Models;
using TheRewind.ViewModels;

namespace TheRewind.Controllers;

[Route("movies")]
public class MovieController : Controller
{
    private readonly ApplicationContext _context;

    private const string SessionUserId = "userId";

    public MovieController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult AllMovies()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var movies = _context.Movies.AsNoTracking().Select(m => new MovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            Genre = m.Genre,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            UserId = m.UserId,
            Username = m.User!.Username,
            AvgRating = m.Ratings.Average(m => m.userRating).ToString("F1"),
        }).ToList();

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

    [HttpPost("new")]
    public IActionResult AddMovie(MovieFormViewModel vm)
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

        // int userId = (int)HttpContext.Session.GetInt32(SessionUserId);
        // create new Movie
        var newMovie = new Movie
        {
            Title = vm.Title,
            Genre = vm.Genre,
            Description = vm.Description,
            ReleaseDate = vm.ReleaseDate,
            UserId = uid
        };

        _context.Movies.Add(newMovie);
        _context.SaveChanges();

        return RedirectToAction(nameof(AllMovies));
    }

    [HttpGet("{movieId}/edit")]
    public IActionResult EditMovie(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = _context.Movies.Where(m => m.Id == movieId).Select(m => new EditMovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            Genre = m.Genre,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            UserId = m.UserId
        }).FirstOrDefault();

        if (uid != vm!.UserId)
        {
            return Forbid();
        }

        return View(vm);
    }

    [HttpPost("{movieId}/edit")]
    public IActionResult UpdateMovie(int movieId, EditMovieViewModel viewModel)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        // if (uid != viewModel.UserId)
        // {
        //     return Unauthorized();
        // }

        if (!ModelState.IsValid)
        {
            return View(nameof(EditMovie), viewModel);
        }

        var movie = _context.Movies.Find(movieId);
        if (movie == null)
        {
            return NotFound();
        }

        // game.Id = (int)viewModel.Id;
        // Console.WriteLine($"{game.Id} --------------------------------");
        movie.Title = viewModel.Title;
        movie.Genre = viewModel.Genre;
        movie.Description = viewModel.Description;
        movie.ReleaseDate = viewModel.ReleaseDate;
        movie.UpdatedAt = DateTime.Now;

        _context.SaveChanges();

        return RedirectToAction(nameof(MovieDetails), new { movieId = movie.Id });
    }

    [HttpGet("{movieId}/delete")]
    public IActionResult DeleteMovie(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = _context.Movies.Where(m => m.Id == movieId).Select(m => new MovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            UserId = m.UserId
        }).FirstOrDefault();

        if (uid != vm!.UserId)
        {
            return Forbid();
        }

        return View(vm);
    }

    [HttpPost("{movieId}/delete")]
    public IActionResult RemoveMovie(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        if (userid is not int uid)
        {
            return Unauthorized();
        }

        // if (uid != viewModel.UserId)
        // {
        //     return Unauthorized();
        // }

        var movie = _context.Movies.Find(movieId);
        if (movie == null)
        {
            return NotFound();
        }

        // game.Id = (int)viewModel.Id;
        // Console.WriteLine($"{game.Id} --------------------------------");
        _context.Remove(movie);
        _context.SaveChanges();

        return RedirectToAction(nameof(AllMovies));
    }

    // --------------------Ratings--------------------------------

    [HttpPost("{movieId}/rate")]
    public IActionResult AddRating(int movieId, int rating)
    {
        // Console.WriteLine($"--------------------------- {albumId}");
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // Console.WriteLine($"--------------------------- {albumId}");

        // checks if "HttpContext.Session.GetInt32(SessionUserId)" is null and also casts if it exists onto the variable uid as an int
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        // Console.WriteLine($"{rating} -------------------------");


        if (!(rating >= 1 && rating <= 5))
        {
            return RedirectToAction(nameof(MovieDetails), new { movieId = movieId });
        }

        var maybeRated = _context
        .Ratings
        .Where(rating => rating.UserId == uid && rating.MovieId == movieId)
        .FirstOrDefault();

        if (maybeRated is null)
        {

            var newRating = new Rating
            {
                UserId = uid,
                MovieId = movieId,
                userRating = rating,
            };
            _context.Add(newRating);
            _context.SaveChanges();
        }
        else
        {
            // Console.WriteLine($"{maybeRated.Id} -------------------------");
            var existingRating = _context.Ratings.Find(maybeRated.Id);

            existingRating!.userRating = rating;
            existingRating.UpdatedAt = DateTime.UtcNow;
            _context.SaveChanges();

        }

        return RedirectToAction(nameof(MovieDetails), new { movieId = movieId });
    }

    [HttpGet("{movieId}")]
    public IActionResult MovieDetails(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = _context.Movies.AsNoTracking().Where(m => m.Id == movieId).Select(m => new MovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            Genre = m.Genre,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            UserId = m.UserId,
            Username = m.User!.Username,
            TotalRatings = m.Ratings.Where(r => r.MovieId == movieId).ToList().Count,
            UserRating = m.Ratings
                        .FirstOrDefault(r => r.MovieId == movieId && r.UserId == uid)
                        .userRating,
            AvgRating = m.Ratings.Average(m => m.userRating).ToString("F1"),
            UsersThatHaveRated = m.Ratings.OrderByDescending(r => r.CreatedAt).Select(r => r.User!.Username).Take(5).ToList(),

        }).FirstOrDefault();

        // Console.WriteLine($"{vm.UserRating} -------------------------------");

        return View(vm);
    }

}