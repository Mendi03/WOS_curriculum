using TheGroanZone.Models;
using TheGroanZone.Services;
using TheGroanZone.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TheGroanZone.Controllers;

[Route("account")]
public class AccountController : Controller
{
    private readonly ApplicationContext _context;
    private readonly IPasswordService _passwords;
    private const string SessionUserId = "userId";

    public AccountController(ApplicationContext context, IPasswordService passwords) // ADD PARAMETER
    {
        _context = context;
        _passwords = passwords; // ASSIGN PARAMETER
    }

    [HttpGet("register")]
    public IActionResult RegisterForm()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is int uid)
        {
            return Unauthorized();
        }

        var vm = new RegistrationFormViewModel();
        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("register/process")]
    public async Task<IActionResult> ProcessRegister(RegistrationFormViewModel vm)
    {

        //normalize data
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Username = (vm.Username ?? "").Trim();
        vm.Password = (vm.Password ?? "").Trim();
        vm.ConfirmPassword = (vm.ConfirmPassword ?? "").Trim();


        //Validate inputs
        if (!ModelState.IsValid)
        {
            return View(nameof(RegisterForm), vm);
        }

        // Make sure the new email is not in the database
        if (await _context.Users.AnyAsync((u) => u.Email == vm.Email))
        {
            ModelState.AddModelError("Email", "That email is already in use. Please login instead");
            return View(nameof(RegisterForm), vm);
        }

        //hash the password
        var hashedPassword = _passwords.Hash(vm.Password);

        // create the new user
        var newUser = new User
        {
            Username = vm.Username,
            Email = vm.Email,
            PasswordHash = hashedPassword
        };

        // add new user to database
        await _context.Users.AddAsync(newUser);
        await _context.SaveChangesAsync();

        // logs user in
        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        //redirect
        return RedirectToAction("AllJokes", "Joke");
    }

    [HttpGet("login")]
    public IActionResult LoginForm(string? message)
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is int uid)
        {
            return Unauthorized();
        }

        var vm = new LoginFormViewModel { Message = message };
        return View(vm);
    }

    [ValidateAntiForgeryToken]
    [HttpPost("login/process")]
    public async Task<IActionResult> ProcessLogin(LoginFormViewModel vm)
    {
        // normalize input
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();

        // check if input is valid
        if (!ModelState.IsValid)
        {
            return View(nameof(LoginForm), vm);
        }

        // email exists, find user
        var maybeUser = await _context.Users.FirstOrDefaultAsync((u) => u.Email == vm.Email);

        if (maybeUser is null || (!_passwords.Verify(vm.Password, maybeUser.PasswordHash)))
        {
            ModelState.AddModelError("", "Invalid user credentials.");
            return View(nameof(LoginForm), vm);
        }

        // Log the user in
        HttpContext.Session.SetInt32(SessionUserId, maybeUser.Id);
        return RedirectToAction("AllJokes", "Joke");
    }

    [HttpGet("logout")]
    public IActionResult ConfirmLogout()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is null)
        {
            return Unauthorized();
        }

        return View();
    }

    [ValidateAntiForgeryToken]
    [HttpPost("logout/process")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();

        return RedirectToAction(nameof(LoginForm), new { message = "logout-successful" });
    }

    [HttpGet("profile")]
    public async Task<IActionResult> UserProfile()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var vm = await _context.Users.AsNoTracking().Where(u => u.Id == uid).Select(u => new ProfileViewModel
        {
            Username = u.Username,
            Email = u.Email,
            JokesAdded = u.Jokes.Where(m => m.UserId == uid).ToList().Count,
            JokesRated = u.Ratings.Where(r => r.UserId == uid).ToList().Count,
        }).FirstOrDefaultAsync();

        return View(vm);
    }
}