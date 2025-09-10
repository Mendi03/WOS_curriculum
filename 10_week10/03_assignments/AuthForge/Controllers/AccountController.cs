using AuthForge.Models;
using AuthForge.Services;
using AuthForge.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AuthForge.Controllers;

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