using TheRewind.Models;
using TheRewind.Services;
using TheRewind.ViewModels;
using Microsoft.AspNetCore.Mvc;

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
        return RedirectToAction("AllAlbums", "Albums");
    }

    [HttpGet("protected")]
    public IActionResult ProtectedPage()
    {
        var userid = HttpContext.Session.GetInt32(SessionUserId);
        if (userid is not int uid)
        {
            return Unauthorized();
        }

        var user = _context.Users.Where((u) => u.Id == uid).FirstOrDefault();
        var email = user!.Email;

        return View("ProtectedPage", email);
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

        // check if user exists
        // if (!_context.Users.Any((u) => u.Email == vm.Email))
        // {
        //     // manually add an error to model state
        //     ModelState.AddModelError("", "Invalid user credentials.");
        //     return View(nameof(LoginForm), vm);
        // }

        // email exists, find user
        var maybeUser = _context.Users.FirstOrDefault((u) => u.Email == vm.Email);

        if (maybeUser is null || (!_passwords.Verify(vm.Password, maybeUser.PasswordHash)))
        {
            ModelState.AddModelError("", "Invalid user credentials.");
            return View(nameof(LoginForm), vm);
        }

        // verify password
        // if (!_passwords.Verify(vm.Password, maybeUser.PasswordHash))
        // {
        //     ModelState.AddModelError("", "Invalid user credentials.");
        //     return View(nameof(LoginForm), vm);
        // }

        // Log the user in
        HttpContext.Session.SetInt32(SessionUserId, maybeUser.Id);
        return RedirectToAction("AllAlbums", "Albums");
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
}