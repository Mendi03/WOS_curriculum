using AlbumCrud.Classes;
using Microsoft.AspNetCore.Mvc;

namespace AlbumCrud.Controllers;

[ApiController]
[Route("api/albums")]
public class AlbumsController : ControllerBase
{
    private static readonly List<Album> _albums = Album.GetAlbums();

    // Action method to get all Albums
    [HttpGet]
    public ActionResult<List<Album>> GetAllAlbums()
    {
        if (_albums.Count == 0)
        {
            return NotFound("No Albums found."); // Returns a 404 Not Found status code
        }
        return Ok(_albums); // Returns a 200 OK status code with the Album list
    }

    [HttpGet("{id}")]
    public ActionResult<Album> GetAlbumById(int id)
    {
        // Use LINQ to find the Album with the matching ID
        var Album = _albums.FirstOrDefault(album => album.Id == id);

        if (Album is null)
        {
            return NotFound("Album not found."); // Returns 404 Not Found
        }

        return Ok(Album); // Returns 200 OK with the Album object
    }
    [HttpGet("filter")]
    public ActionResult<Album> GetAlbumByGenre(string? genre)
    {
        var query = _albums.AsQueryable();

        if (!string.IsNullOrEmpty(genre))
        {
            query = query.Where(album => album.Genre.Contains(genre, StringComparison.OrdinalIgnoreCase));
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
        var query = _albums.AsQueryable();

        if (!string.IsNullOrEmpty(term))
        {
            query = query.Where(album => album.AlbumTitle.Contains(term, StringComparison.OrdinalIgnoreCase) || album.Artist.Contains(term, StringComparison.OrdinalIgnoreCase));
        }

        var results = query.ToList();

        if (results.Count == 0)
        {
            return NotFound("No Albums found matching the search criteria.");
        }
        return Ok(results);
    }

    [HttpPost]
    public ActionResult<Album> CreateAlbum([FromBody] Album newAlbum)
    {
        // 1. Auto-generate a new ID for the Album
        // This is a simple LINQ approach for an in-memory list
        var nextId = _albums.Count != 0 ? _albums.Max(album => album.Id) + 1 : 1;
        newAlbum.Id = nextId;

        // 2. Add the new Album to our in-memory list
        _albums.Add(newAlbum);

        // 3. Return a success response
        // The CreatedAtAction helper method returns a 201 Created status code
        return CreatedAtAction(nameof(GetAlbumById), new { id = newAlbum.Id }, newAlbum);

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
        var existingAlbum = _albums.FirstOrDefault(m => m.Id == id);

        if (existingAlbum == null)
        {
            return NotFound("Album not found.");
        }

        // 3. Update the Album with the new data
        var albumIndex = _albums.IndexOf(existingAlbum);
        _albums[albumIndex] = updatedAlbum;

        // 4. Return a success response
        // NoContent returns a 204 status code, which is the standard for a successful PUT
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteAlbum(int id)
    {
        // 1. Find the Album to remove using its ID
        var AlbumToRemove = _albums.FirstOrDefault(m => m.Id == id);

        if (AlbumToRemove is null)
        {
            return NotFound("Album not found.");
        }

        // 2. Remove the Album from the list
        _albums.Remove(AlbumToRemove);

        // 3. Return a success response
        // NoContent returns a 204 status code, which is the standard for a successful DELETE
        return NoContent();
    }
}