using AlbumCrud.Models;
using Microsoft.AspNetCore.Mvc;

namespace AlbumCrud.Controllers;

[ApiController]
[Route("api/albums")]
public class AlbumsController : ControllerBase
{
    private readonly AlbumContext _context;

    public AlbumsController(AlbumContext context)
    {
        _context = context;
    }

    // Action method to get all Albums
    [HttpGet("")]
    public ActionResult<List<Album>> GetAllAlbums()
    {
        if (!_context.Albums.Any())
        {
            return NotFound("No movies found.");
        }

        var movies = _context.Albums.ToList();
        return Ok(movies); // Returns a 200 OK status code with the Album list
    }

    [HttpGet("{id}")]
    public ActionResult<Album> GetAlbumById(int id)
    {
        // Use LINQ to find the Album with the matching ID
        var Album = _context.Albums.FirstOrDefault(album => album.Id == id);

        if (Album is null)
        {
            return NotFound("Album not found."); // Returns 404 Not Found
        }

        return Ok(Album); // Returns 200 OK with the Album object
    }
    [HttpGet("filter")]
    public ActionResult<Album> GetAlbumByGenre(string? genre)
    {
        var query = _context.Albums.AsQueryable();

        if (!string.IsNullOrEmpty(genre))
        {
            query = query.Where(album => album.Genre.Contains(genre));
        }

        var results = query.ToList();

        if (results.Count == 0)
        {
            return NotFound($"No Albums found matching the {genre} Genre.");
        }
        return Ok(results);
    }

    [HttpGet("search")]
    public ActionResult<List<Album>> Search(string? term)
    {
        var query = _context.Albums.AsQueryable();

        if (!string.IsNullOrEmpty(term))
        {
            query = query.Where(album => album.AlbumTitle.Contains(term) || album.Artist.Contains(term));
        }

        var results = query.ToList();

        if (results.Count == 0)
        {
            return NotFound("No Albums found matching the search criteria.");
        }
        return Ok(results);
    }

    [HttpPost("")]
    public ActionResult<Album> CreateAlbum([FromBody] Album newAlbum)
    {
        // 1. Auto-generate a new ID for the Album
        // This is a simple LINQ approach for an in-memory list
        // var nextId = _context.Albums.Count() != 0 ? _context.Albums.Max(album => album.Id) + 1 : 1;
        // newAlbum.Id = nextId;

        // 2. Add the new Album to our in-memory list


        _context.Albums.Add(newAlbum);
        _context.SaveChanges();

        // 3. Return a success response
        // The CreatedAtAction helper method returns a 201 Created status code
        return CreatedAtAction(nameof(GetAlbumById), new { id = newAlbum.Id }, newAlbum);

    }

    [HttpPost("add/albums")]
    public ActionResult<List<Album>> CreateAlbums([FromBody] List<Album> newAlbums)
    {
        // 1. Auto-generate a new ID for the Album
        // This is a simple LINQ approach for an in-memory list
        // var nextId = _context.Albums.Count() != 0 ? _context.Albums.Max(album => album.Id) + 1 : 1;
        // newAlbum.Id = nextId;

        // 2. Add the new Album to our in-memory list
        foreach (var album in newAlbums)
        {
            _context.Albums.Add(album);
        }

        _context.SaveChanges();

        // 3. Return a success response
        // The CreatedAtAction helper method returns a 201 Created status code
        return CreatedAtAction(nameof(GetAllAlbums), newAlbums);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateAlbum(int id, [FromBody] Album updatedAlbum)
    {
        // 1. Check if the provided ID from the URL matches the ID in the request body
        if (id != updatedAlbum.Id)
        {
            return BadRequest("Album ID in the URL does not match the ID in the request body.");
        }

        // 2. Find the existing Album in our list
        var existingAlbum = _context.Albums.FirstOrDefault(m => m.Id == id);

        if (existingAlbum == null)
        {
            return NotFound("Album not found.");
        }

        // 3. Update the Album with the new data
        existingAlbum.Rank = updatedAlbum.Rank;
        existingAlbum.Artist = updatedAlbum.Artist;
        existingAlbum.ReleaseYear = updatedAlbum.ReleaseYear;
        existingAlbum.Genre = updatedAlbum.Genre;
        existingAlbum.AlbumTitle = updatedAlbum.AlbumTitle;
        existingAlbum.UpdatedAt = DateTime.UtcNow;

        _context.SaveChanges();

        // 4. Return a success response
        // NoContent returns a 204 status code, which is the standard for a successful PUT
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteAlbum(int id)
    {
        // 1. Find the Album to remove using its ID
        var AlbumToRemove = _context.Albums.FirstOrDefault(m => m.Id == id);

        if (AlbumToRemove is null)
        {
            return NotFound("Album not found.");
        }

        // 2. Remove the Album from the list
        _context.Albums.Remove(AlbumToRemove);
        _context.SaveChanges();

        // 3. Return a success response
        // NoContent returns a 204 status code, which is the standard for a successful DELETE
        return NoContent();
    }
}