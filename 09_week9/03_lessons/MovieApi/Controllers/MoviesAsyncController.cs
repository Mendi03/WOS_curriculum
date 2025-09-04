using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;

namespace MovieApi.Controllers;

[Route("api/async/movies/")]
public class MoviesAsyncController : ControllerBase
{
    // private static readonly List<Movie> _movies = Movie.GetMovies();

    [HttpGet("")]
    public async Task<ActionResult<List<Movie>>> GetAllMovies()
    {
        await Task.Delay(50);
        if (_movies.Count == 0)
        {
            return NotFound("No movies found."); // Returns a 404 Not Found status code
        }
        return Ok(_movies); // Returns a 200 OK status code with the movie list
    }
}