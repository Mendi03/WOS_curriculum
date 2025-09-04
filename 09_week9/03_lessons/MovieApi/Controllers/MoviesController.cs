// Controllers/MoviesController.cs
using Microsoft.AspNetCore.Mvc;
using MovieApi.Classes; // Your Serializer and Movie classes
using System.Text.Json; // For JSON serialization
using System.Collections.Generic; // For List<T>

namespace MovieApi.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController : ControllerBase
{
    private static readonly List<Movie> _movies = Movie.GetMovies();
    // _movies = Movie.GetMovies();

    // Action method to get all movies
    [HttpGet]
    public ActionResult<List<Movie>> GetAllMovies()
    {
        if (_movies.Count == 0)
        {
            return NotFound("No movies found."); // Returns a 404 Not Found status code
        }
        return Ok(_movies); // Returns a 200 OK status code with the movie list
    }
    [HttpGet("{id}")]
    public ActionResult<Movie> GetMovieById(int id)
    {
        // Use LINQ to find the movie with the matching ID
        var movie = _movies.FirstOrDefault(m => m.MovieId == id);

        if (movie is null)
        {
            return NotFound("Movie not found."); // Returns 404 Not Found
        }

        return Ok(movie); // Returns 200 OK with the movie object
    }
    // Controllers/MoviesController.cs (inside MoviesController class)

    // [HttpGet("search")]
    // public ActionResult<List<Movie>> Search(string? keyword, int? minRating)
    // {
    //     var query = _movies.AsQueryable();

    //     if (!string.IsNullOrEmpty(keyword))
    //     {
    //         query = query.Where(m => m.Title.Contains(keyword, StringComparison.OrdinalIgnoreCase));
    //     }

    //     if (minRating.HasValue)
    //     {
    //         query = query.Where(m => m.Rating >= minRating.Value);
    //     }

    //     var results = query.ToList();

    //     if (results.Count == 0)
    //     {
    //         return NotFound("No movies found matching the search criteria.");
    //     }
    //     return Ok(results);
    // }
    // [HttpPost("")]
    // public ActionResult<Movie> CreateMovie([FromBody] Movie newMovie)
    // {
    //     // 1. Auto-generate a new ID for the movie
    //     // This is a simple LINQ approach for an in-memory list
    //     var nextId = _movies.Count != 0 ? _movies.Max(m => m.MovieId) + 1 : 1;
    //     newMovie.MovieId = nextId;

    //     // 2. Add the new movie to our in-memory list
    //     _movies.Add(newMovie);

    //     // 3. Return a success response
    //     // The CreatedAtAction helper method returns a 201 Created status code
    //     return CreatedAtAction(nameof(GetMovieById), new { id = newMovie.MovieId }, newMovie);
    // }

    // [HttpPut("{id}")]
    // public IActionResult UpdateMovie(int id, [FromBody] Movie updatedMovie)
    // {
    //     // 1. Check if the provided ID from the URL matches the ID in the request body
    //     if (id != updatedMovie.MovieId)
    //     {
    //         return BadRequest("Movie ID in the URL does not match the ID in the request body.");
    //     }

    //     // 2. Find the existing movie in our list
    //     var existingMovie = _movies.FirstOrDefault(m => m.MovieId == id);

    //     if (existingMovie == null)
    //     {
    //         return NotFound("Movie not found.");
    //     }

    //     // 3. Update the movie with the new data
    //     var movieIndex = _movies.IndexOf(existingMovie);
    //     _movies[movieIndex] = updatedMovie;

    //     // 4. Return a success response
    //     // NoContent returns a 204 status code, which is the standard for a successful PUT
    //     return NoContent();
    // }

    // [HttpDelete("{id}")]
    // public IActionResult DeleteMovie(int id)
    // {
    //     // 1. Find the movie to remove using its ID
    //     var movieToRemove = _movies.FirstOrDefault(m => m.MovieId == id);

    //     if (movieToRemove is null)
    //     {
    //         return NotFound("Movie not found.");
    //     }

    //     // 2. Remove the movie from the list
    //     _movies.Remove(movieToRemove);

    //     // 3. Return a success response
    //     // NoContent returns a 204 status code, which is the standard for a successful DELETE
    //     return NoContent();
    // }
}