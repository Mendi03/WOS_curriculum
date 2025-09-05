using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;

namespace MovieApi.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController : ControllerBase
{
    private readonly MovieContext _context;

    public MoviesController(MovieContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public ActionResult<List<Movie>> GetAllMovies()
    {
        if (!_context.Movies.Any())
        {
            return NotFound("No movies found.");
        }

        var movies = _context.Movies.ToList();
        return Ok(movies);
    }

    [HttpGet("{id}")]
    public ActionResult<Movie> GetOneMovie(int id)
    {
        var maybeMovie = _context.Movies.FirstOrDefault((movie) => movie.Id == id);
        if (maybeMovie is null)
        {
            return NotFound();
        }
        return Ok(maybeMovie);
    }

    [HttpGet("search")]
    public ActionResult<List<Movie>> Search(string? keyword, double? minRating)
    {
        var query = _context.Movies.AsQueryable();

        if (!string.IsNullOrEmpty(keyword))
        {
            query = query.Where(
                (movie) => movie.Title.Contains(keyword, StringComparison.OrdinalIgnoreCase)
            );
        }

        if (minRating.HasValue)
        {
            query = query.Where(m => m.Rating >= minRating.Value);
        }

        var results = query.ToList();

        if (results.Count == 0)
        {
            return NotFound("No movies found matching the search criteria.");
        }
        return Ok(results);
    }

    [HttpPost("")]
    public ActionResult<Movie> CreateMovie([FromBody] Movie newMovie)
    {
        var nextId = _context.Movies.Count() == 0 ? 1 : _context.Movies.Max((m) => m.Id) + 1;
        newMovie.Id = nextId;

        _context.Movies.Add(newMovie);
        return CreatedAtAction(nameof(GetOneMovie), new { id = nextId }, newMovie);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateMovie(int id, [FromBody] Movie updatedMovie)
    {
        if (id != updatedMovie.Id)
        {
            return BadRequest("Movie ID in the URL does not match the ID in the request body.");
        }

        var maybeMovie = _context.Movies.FirstOrDefault((m) => m.Id == id);
        if (maybeMovie is null)
        {
            return NotFound("Movie not found.");
        }

        // var movieIndex = _context.Movies.IndexOf(maybeMovie);
        // _context.Movies[movieIndex] = updatedMovie;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteMovie(int id)
    {
        var movieToRemove = _context.Movies.FirstOrDefault(m => m.Id == id);

        if (movieToRemove is null)
        {
            return NotFound("Movie not found.");
        }

        _context.Movies.Remove(movieToRemove);
        return NoContent();
    }
}