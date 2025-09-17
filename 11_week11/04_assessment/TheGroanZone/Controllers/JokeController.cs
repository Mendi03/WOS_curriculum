using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheGroanZone.Models;
using TheGroanZone.ViewModels;

namespace TheGroanZone.Controllers;

[Route("jokes")]
public class JokeController : Controller
{
    private readonly ApplicationContext _context;
    private readonly ILogger<JokeController> _logger;

    private const string SessionUserId = "userId";

    public JokeController(ApplicationContext context, ILogger<JokeController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet("")]
    public async Task<IActionResult> AllJokes()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);


        // checks if user is logged in. If not, returns unauthorized view
        // checks if user is logged in. If not, returns unauthorized view
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var jokes = await _context
        .Jokes
        .AsNoTracking()
        .Select(j => new JokeViewModel
        {
            Id = j.Id,
            Setup = j.Setup,
            Punchline = j.Punchline,
            UserId = j.UserId,
            Username = j.User!.Username,
            CreatedAt = j.CreatedAt.ToString("MMM d, yyyy"),
            AvgRating = j.Ratings.Average(r => r.UserRating).ToString("F1"),
        }).ToListAsync();

        var vm = new JokeIndexViewModel
        {
            Jokes = jokes
        };

        return View(vm);
    }

    [HttpGet("new")]
    public IActionResult JokeForm()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var vm = new JokeFormViewModel();

        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("new")]
    public async Task<IActionResult> AddJoke(JokeFormViewModel vm)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userid is not int uid)
        {
            return Unauthorized();
        }
        if (!ModelState.IsValid)
        {
            return View(nameof(JokeForm), vm);
        }

        // create new Joke
        var newJoke = new Joke
        {
            Setup = vm.Setup,
            Punchline = vm.Punchline,
            UserId = uid
        };

        await _context.Jokes.AddAsync(newJoke);
        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(AllJokes));
    }

    [HttpGet("{jokeId}/edit")]
    public async Task<IActionResult> EditJoke(int jokeId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context.Jokes.AsNoTracking().Where(j => j.Id == jokeId).Select(j => new EditJokeViewModel
        {
            Id = j.Id,
            Setup = j.Setup,
            Punchline = j.Punchline,
            UserId = j.UserId,
        }).FirstOrDefaultAsync();

        if (uid != vm!.UserId)
        {
            // return Forbid(); // forbid keeps returning a 500 error so I replaced it with a manual 403 instead
            _logger.LogWarning("Warning: Unauthorized attempt to delete joke {jokeId} by unauthenticated user.", jokeId);
            return StatusCode(403);
        }

        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("{jokeId}/edit")]
    public async Task<IActionResult> UpdateJoke(int jokeId, EditJokeViewModel viewModel)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        if (!ModelState.IsValid)
        {
            return View(nameof(EditJoke), viewModel);
        }

        var joke = await _context.Jokes.FindAsync(jokeId);

        if (joke == null)
        {
            return NotFound();
        }

        joke.Setup = viewModel.Setup;
        joke.Punchline = viewModel.Punchline;
        joke.UpdatedAt = DateTime.Now;

        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(JokeDetails), new { jokeId = joke.Id });
    }

    [HttpGet("{jokeId}/delete")]
    public async Task<IActionResult> DeleteJoke(int jokeId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context.Jokes.AsNoTracking().Where(j => j.Id == jokeId).Select(j => new JokeViewModel
        {
            Id = j.Id,
            // Setup = j.Setup,
            UserId = j.UserId
        }).FirstOrDefaultAsync();

        if (uid != vm!.UserId)
        {
            // return Forbid(); // forbid keeps returning a 500 error
            return StatusCode(403);
        }

        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("{jokeId}/delete")]
    public async Task<IActionResult> RemoveJoke(int jokeId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var joke = await _context.Jokes.FindAsync(jokeId);

        if (joke == null)
        {
            return NotFound();
        }

        _context.Remove(joke);
        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(AllJokes));
    }

    // --------------------Ratings--------------------------------

    [ValidateAntiForgeryToken]
    [HttpPost("{jokeId}/rate")]
    public async Task<IActionResult> AddRating(int jokeId, int rating)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        // only allows ratings from 1 to 4, anything outside of that redirects to the same joke page
        if (!(rating >= 1 && rating <= 4))
        {
            return RedirectToAction(nameof(JokeDetails), new { jokeId = jokeId });
        }

        var maybeRated = await _context
        .Ratings
        .Where(rating => rating.UserId == uid && rating.JokeId == jokeId)
        .FirstOrDefaultAsync();

        if (maybeRated is null)
        {

            var newRating = new Rating
            {
                UserId = uid,
                JokeId = jokeId,
                UserRating = rating,
            };

            await _context.AddAsync(newRating);
            await _context.SaveChangesAsync();
        }
        else
        {
            var existingRating = await _context.Ratings.FindAsync(maybeRated.Id);

            existingRating!.UserRating = rating;
            existingRating.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

        }

        return RedirectToAction(nameof(JokeDetails), new { jokeId = jokeId });
    }

    [HttpGet("{jokeId}")]
    public async Task<IActionResult> JokeDetails(int jokeId)
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);

        // checks if user is logged in. If not, returns unauthorized view
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context.Jokes.AsNoTracking().Where(j => j.Id == jokeId).Select(j => new JokeViewModel
        {
            Id = j.Id,
            Setup = j.Setup,
            Punchline = j.Punchline,
            UserId = j.UserId,
            Username = j.User!.Username,
            TotalRatings = j.Ratings.Where(r => r.JokeId == jokeId).ToList().Count,
            // Left this dereference warning because I need the value to be null whenever the user 
            // has not rated the joke. The check for null is done in the JokeDetails View, so no issues arise.
            UserRating = j.Ratings
                        .FirstOrDefault(r => r.JokeId == jokeId && r.UserId == uid)
                        .UserRating,
            AvgRating = j.Ratings.Average(j => j.UserRating).ToString("F1"),
            UsersThatHaveRated = j.Ratings.OrderByDescending(r => r.CreatedAt).Select(r => r.User!.Username).Take(5).ToList(), // Holds the newest 5 users that have rated the joke

        }).FirstOrDefaultAsync();

        // check if jokewas not found
        if (vm is null)
        {
            return NotFound();
        }

        return View(vm);
    }

}