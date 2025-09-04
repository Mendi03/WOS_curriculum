using AlbumsApi.Classes;
using Microsoft.AspNetCore.Mvc;

namespace AlbumsApi.Controllers;

[ApiController]
[Route("api/albums")]
public class AlbumsController : ControllerBase
{
    private readonly List<Album> _albums;

    public AlbumsController()
    {
        // Load Album data from the JSON file on startup
        string filePath = "Data/albums.json";
        _albums = Serializer.DeserializeFromFile<List<Album>>(filePath) ?? [];
    }

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
    public ActionResult<List<Album>> Filter(string? genre)
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
}