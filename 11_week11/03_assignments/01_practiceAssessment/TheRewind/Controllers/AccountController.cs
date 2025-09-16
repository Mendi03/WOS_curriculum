using TheRewind.Models;
using TheRewind.Services;
using TheRewind.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TheRewind.Controllers;

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
        var vm = new RegistrationFormViewModel();
        return View(vm);
    }

    [HttpPost("register/process")]
    public IActionResult ProcessRegister(RegistrationFormViewModel vm)
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
        if (_context.Users.Any((u) => u.Email == vm.Email))
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
        _context.Users.Add(newUser);
        _context.SaveChanges();

        // logs user in
        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        //redirect
        return RedirectToAction("AllMovies", "Movie");
    }

    [HttpGet("login")]
    public IActionResult LoginForm(string? message)
    {
        var vm = new LoginFormViewModel { Message = message };
        return View(vm);
    }

    [HttpPost("login/process")]
    public IActionResult ProcessLogin(LoginFormViewModel vm)
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
        var maybeUser = _context.Users.FirstOrDefault((u) => u.Email == vm.Email);

        if (maybeUser is null || (!_passwords.Verify(vm.Password, maybeUser.PasswordHash)))
        {
            ModelState.AddModelError("", "Invalid user credentials.");
            return View(nameof(LoginForm), vm);
        }

        // Log the user in
        HttpContext.Session.SetInt32(SessionUserId, maybeUser.Id);
        return RedirectToAction("AllMovies", "Movie");
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
    public IActionResult UserProfile()
    {
        var userId = HttpContext.Session.GetInt32(SessionUserId);

        if (userId is not int uid)
        {
            return Unauthorized();
        }

        var vm = _context.Users.AsNoTracking().Where(u => u.Id == uid).Select(u => new ProfileViewModel
        {
            Username = u.Username,
            Email = u.Email,
            MoviesAdded = u.Movies.Where(m => m.UserId == uid).ToList().Count,
            MoviesRated = u.Ratings.Where(r => r.UserId == uid).ToList().Count,
        }).FirstOrDefault();

        return View(vm);
    }
}