// Controllers/MoviesController.cs
using Microsoft.AspNetCore.Mvc;
using MoviesApp.Models;
using MoviesApp.ViewModels;

namespace MoviesApp.Controllers;

[Route("movies")]
public class MoviesController : Controller
{
    private readonly MovieContext _context;

    public MoviesController(MovieContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult MoviesIndex()
    {
        var viewModel = new MoviesIndexViewModel
        {
            Movies = _context.Movies
                .Select(m => new MovieRowViewModel
                {
                    Id = m.Id,
                    Title = m.Title,
                    Genre = m.Genre
                })
                .ToList()
        };

        return View(viewModel);
    }
    [HttpGet("new")]
    public IActionResult NewMovieForm()
    {
        // Pass an empty ViewModel to the View to be filled by the user
        return View(new MovieViewModel());
    }

    [HttpPost("/movies/create")]
    [ValidateAntiForgeryToken]
    public IActionResult CreateNewMovie(MovieViewModel viewModel)
    {
        if (!ModelState.IsValid)
        {
            return View("NewMovieForm", viewModel);
        }

        var movie = new Movie
        {
            Title = viewModel.Title,
            Director = viewModel.Director,
            Genre = viewModel.Genre,
            Description = viewModel.Description,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
        };

        _context.Movies.Add(movie);
        _context.SaveChanges();
        return RedirectToAction(nameof(MoviesIndex));
    }

    [HttpGet("{id}")]
    public IActionResult MovieDetails(int id)
    {
        // Query the database for the movie with the matching Id
        var movie = _context.Movies.FirstOrDefault(m => m.Id == id);

        // If the movie is not found, return a 404 Not Found error
        if (movie == null)
        {
            return NotFound();
        }

        // Map the entity to a view model
        var vm = new MovieViewModel
        {
            Id = movie.Id,
            Title = movie.Title,
            Director = movie.Director,
            Genre = movie.Genre,
            Description = movie.Description
        };

        // Pass the view model to the view
        return View(vm);
    }

    [HttpGet("/movies/{id}/edit")]
    public IActionResult EditMovieForm(int id)
    {
        var movie = _context.Movies.FirstOrDefault(m => m.Id == id);
        if (movie == null)
        {
            return NotFound();
        }

        var viewModel = new MovieViewModel
        {
            Id = movie.Id,
            Title = movie.Title,
            Director = movie.Director,
            Genre = movie.Genre,
            Description = movie.Description
        };

        return View(viewModel);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult UpdateMovie(int id, MovieViewModel viewModel)
    {
        if (id != viewModel.Id)
        {
            return BadRequest();
        }

        if (!ModelState.IsValid)
        {
            return View("EditMovieForm", viewModel);
        }

        var movie = _context.Movies.Find(id);
        if (movie == null)
        {
            return NotFound();
        }

        movie.Title = viewModel.Title;
        movie.Director = viewModel.Director;
        movie.Genre = viewModel.Genre;
        movie.Description = viewModel.Description;
        movie.UpdatedAt = DateTime.Now;

        _context.SaveChanges();

        return RedirectToAction(nameof(MovieDetails), new { id = movie.Id });
    }

    [HttpGet("/movies/{id}/delete")]
    public IActionResult ConfirmDelete(int id)
    {
        var movie = _context.Movies.FirstOrDefault(m => m.Id == id);
        if (movie is null) return NotFound();

        var vm = new MovieViewModel
        {
            Id = movie.Id,
            Title = movie.Title,
            Director = movie.Director,
            Genre = movie.Genre,
            Description = movie.Description
        };

        return View(vm);
    }

    [HttpPost("/movies/{id}/delete")]
    [ValidateAntiForgeryToken]
    public IActionResult DeleteMovie(int id, MovieViewModel vm)
    {
        if (vm.Id is null || vm.Id.Value != id)
        {
            return BadRequest();
        }

        var movie = _context.Movies.Find(id);
        if (movie is null)
        {
            return NotFound();
        }

        _context.Movies.Remove(movie);
        _context.SaveChanges();

        return RedirectToAction(nameof(MoviesIndex));
    }
}