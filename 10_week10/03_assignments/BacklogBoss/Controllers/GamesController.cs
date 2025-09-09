// Controllers/MoviesController.cs
using Microsoft.AspNetCore.Mvc;
using BacklogBoss.Models;
using BacklogBoss.ViewModels;

namespace MoviesApp.Controllers;

[Route("games")]
public class GamesController : Controller
{
    private readonly GameContext _context;

    public GamesController(GameContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult GamesIndex()
    {
        var viewModel = new GamesIndexViewModel
        {
            Games = _context.Games
            .Select(g => new GameRowViewModel
            {
                Id = g.Id,
                Title = g.Title,
                Platform = g.Platform
            })
            .ToList()
        };
        return View(viewModel);
    }

    [HttpGet("new")]
    public IActionResult NewGameForm()
    {
        // Pass an empty ViewModel to the View to be filled by the user
        return View(new GameViewModel());
    }

    [HttpPost("create")]
    [ValidateAntiForgeryToken]
    public IActionResult CreateNewGame(GameViewModel viewModel)
    {
        if (!ModelState.IsValid)
        {
            return View("NewMovieForm", viewModel);
        }

        var game = new Game
        {
            Title = viewModel.Title,
            Platform = viewModel.Platform,
            IsComplete = viewModel.IsComplete,
            Notes = viewModel.Notes,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
        };

        _context.Games.Add(game);
        _context.SaveChanges();
        return RedirectToAction(nameof(GamesIndex));
    }

    [HttpGet("{id}")]
    public IActionResult GameDetails(int id)
    {
        var game = _context.Games.FirstOrDefault(g => g.Id == id);

        if (game == null)
        {
            return NotFound();
        }
        var vm = new GameViewModel
        {
            Id = game.Id,
            Title = game.Title,
            Platform = game.Platform,
            IsComplete = game.IsComplete,
            Notes = game.Notes
        };

        return View(vm);
    }

    [HttpGet("{id}/edit")]
    public IActionResult EditGameForm(int id)
    {
        var game = _context.Games.FirstOrDefault(m => m.Id == id);
        if (game == null)
        {
            return NotFound();
        }

        var vm = new GameViewModel
        {
            Id = game.Id,
            Title = game.Title,
            Platform = game.Platform,
            IsComplete = game.IsComplete,
            Notes = game.Notes
        };

        return View(vm);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult UpdateGame(int id, GameViewModel viewModel)
    {
        if (id != viewModel.Id)
        {
            return BadRequest();
        }

        if (!ModelState.IsValid)
        {
            return View("EditGameForm", viewModel);
        }

        var game = _context.Games.Find(id);
        if (game == null)
        {
            return NotFound();
        }

        // game.Id = (int)viewModel.Id;
        // Console.WriteLine($"{game.Id} --------------------------------");
        game.Title = viewModel.Title;
        game.Platform = viewModel.Platform;
        game.IsComplete = viewModel.IsComplete;
        game.Notes = viewModel.Notes;
        game.UpdatedAt = DateTime.Now;

        _context.SaveChanges();

        return RedirectToAction(nameof(GameDetails), new { id = game.Id });
    }

    [HttpGet("{id}/delete")]
    public IActionResult ConfirmDelete(int id)
    {
        var game = _context.Games.FirstOrDefault(g => g.Id == id);
        if (game is null) return NotFound();

        var vm = new GameViewModel
        {
            Id = game.Id,
            Title = game.Title,
            Platform = game.Platform,
            IsComplete = game.IsComplete,
            Notes = game.Notes
        };

        return View(vm);
    }

    [HttpPost("{id}/delete")]
    [ValidateAntiForgeryToken]
    public IActionResult DeleteGame(int id, GameViewModel vm)
    {
        if (vm.Id is null || vm.Id.Value != id)
        {
            return BadRequest();
        }

        var game = _context.Games.Find(id);
        if (game is null)
        {
            return NotFound();
        }

        _context.Games.Remove(game);
        _context.SaveChanges();

        return RedirectToAction(nameof(GamesIndex));
    }
}