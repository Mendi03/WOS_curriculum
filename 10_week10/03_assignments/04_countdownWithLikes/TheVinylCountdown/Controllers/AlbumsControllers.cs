using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheVinylCountdown.Models;
using TheVinylCountdown.ViewModels;

namespace TheVinylCountdown.Controllers;

[Route("albums")]
public class AlbumsController : Controller
{
    private readonly ApplicationContext _context;

    private const string SessionUserId = "userId";

    public AlbumsController(ApplicationContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult AllAlbums()
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }
        var albums = _context.Albums.Select(a => new AlbumViewModel
        {
            Id = a.Id,
            Title = a.Title,
            Artist = a.Artist,
            UserId = a.UserId,
            Username = a.User!.Username,
            LikeCount = a.Likes.Count,
            LikedByMe = a.Likes.Any(a => a.UserId == uid)
        }).ToList();

        var vm = new AlbumsIndexViewModel
        {
            Albums = albums
        };

        return View(vm);
    }

    [HttpGet("new")]
    public IActionResult AlbumForm()
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }
        var vm = new AlbumFormViewModel();

        return View(vm);
    }

    [HttpPost("new")]
    public IActionResult AddAlbum(AlbumFormViewModel vm)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if "HttpContext.Session.GetInt32(SessionUserId)" is null and also casts if it exists onto the variable uid as an int
        if (userid is not int uid)
        {
            return Unauthorized();
        }
        if (!ModelState.IsValid)
        {
            return View(nameof(AlbumForm), vm);
        }
        // int userId = (int)HttpContext.Session.GetInt32(SessionUserId);
        // create new album
        var newAlbum = new Album
        {
            Title = vm.Title,
            Artist = vm.Artist,
            UserId = uid
        };

        _context.Albums.Add(newAlbum);
        _context.SaveChanges();

        return RedirectToAction(nameof(AllAlbums));
    }

    [HttpPost("{albumId}/like")]
    [ValidateAntiForgeryToken]
    public IActionResult Like(int albumId)
    {
        // Console.WriteLine($"--------------------------- {albumId}");
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // Console.WriteLine($"--------------------------- {albumId}");


        // checks if "HttpContext.Session.GetInt32(SessionUserId)" is null and also casts if it exists onto the variable uid as an int
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        // Console.WriteLine($"--------------------------- {albumId}");

        // Check if the user has already liked this post
        var alreadyLiked = _context.Likes.Any(like => like.UserId == uid && like.AlbumId == albumId);

        if (!alreadyLiked)
        {
            var newLike = new Like
            {
                AlbumId = albumId,
                UserId = uid
            };

            _context.Add(newLike);
            _context.SaveChanges();
        }

        return RedirectToAction(nameof(AllAlbums));
    }

    [HttpPost("{albumId}/Unlike")]
    [ValidateAntiForgeryToken]
    public IActionResult Unlike(int albumId)
    {
        // Console.WriteLine($"--------------------------- {albumId}");
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // Console.WriteLine($"--------------------------- {albumId}");
        // checks if "HttpContext.Session.GetInt32(SessionUserId)" is null and also casts if it exists onto the variable uid as an int
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        // Console.WriteLine($"--------------------------- {albumId}");

        // Find the like to remove
        var toRemove = _context.Likes.FirstOrDefault(like => like.UserId == uid && like.AlbumId == albumId);


        if (toRemove is not null)
        {
            _context.Remove(toRemove);
            _context.SaveChanges();
        }


        return RedirectToAction(nameof(AllAlbums));
    }

    [HttpGet("{id}")]
    public IActionResult AlbumDetails(int id)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if "HttpContext.Session.GetInt32(SessionUserId)" is null and also casts if it exists onto the variable uid as an int
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = _context.Albums.AsNoTracking().Where(a => a.Id == id).Select(a => new AlbumViewModel
        {
            Id = a.Id,
            Title = a.Title,
            Artist = a.Artist,
            Username = a.User!.Username,
            LikeCount = a.Likes.Count,
            LikedByMe = a.Likes.Any(l => l.UserId == uid)
        }).FirstOrDefault();

        return View(vm);
    }

}