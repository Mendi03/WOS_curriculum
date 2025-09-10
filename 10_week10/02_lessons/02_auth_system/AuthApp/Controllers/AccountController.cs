using AuthApp.Models;
using AuthApp.Services;
using AuthApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AuthApp.Controllers;

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

    [ValidateAntiForgeryToken]
    [HttpPost("register/process")]
    public IActionResult ProcessRegister(RegistrationFormViewModel vm)
    {
        vm.Username = (vm.Username ?? "").Trim().ToLowerInvariant();
        vm.Email = (vm.Email ?? "").Trim().ToLowerInvariant();
        vm.Password = (vm.Password ?? "").Trim();
        vm.ConfirmPassword = (vm.ConfirmPassword ?? "").Trim();

        if (!ModelState.IsValid)
        {
            return View(nameof(RegisterForm), vm);
        }

        if (_context.Users.Any((u) => u.Email == vm.Email))
        {
            ModelState.AddModelError("Email", "That email is already in use. Please login instead");
            return View(nameof(RegisterForm), vm);
        }


        //hash the password
        var hashedPassword = _passwords.Hash(vm.Password);

        var newUser = new User
        {
            Username = vm.Username,
            Email = vm.Email,
            PasswordHash = hashedPassword
        };

        _context.Users.Add(newUser);
        _context.SaveChanges();

        // logs user in
        HttpContext.Session.SetInt32(SessionUserId, newUser.Id);

        //redirect
        return RedirectToAction(nameof(ProtectedPage));
    }

    [HttpGet("protected")]
    public IActionResult ProtectedPage()
    {
        return View();
    }
}