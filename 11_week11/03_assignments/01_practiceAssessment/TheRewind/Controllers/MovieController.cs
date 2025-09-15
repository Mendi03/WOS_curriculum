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
            UserId = m.UserId
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

    [HttpGet("{movieId}")]
    public IActionResult MovieDetails(int movieId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = _context.Movies.AsNoTracking().Select(m => new MovieViewModel
        {
            Id = m.Id,
            Title = m.Title,
            Genre = m.Genre,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            UserId = m.UserId
        }).FirstOrDefault();

        return View(vm);

    }

}