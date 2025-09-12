using Microsoft.AspNetCore.Mvc;
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
            Username = _context.Users.FirstOrDefault(user => user.Id == a.UserId).Username
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
            UserId = (int)HttpContext.Session.GetInt32(SessionUserId)
        };

        _context.Albums.Add(newAlbum);
        _context.SaveChanges();

        return RedirectToAction(nameof(AllAlbums));
    }




}