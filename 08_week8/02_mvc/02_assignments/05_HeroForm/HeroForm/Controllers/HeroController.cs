using HeroForm.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace HeroForm.Controllers;

[Route("heroes")]
public class HeroController : Controller
{
    [HttpGet("register")]
    public IActionResult Register()
    {
        // var vm = new HeroRegistrationViewModel();
        // return View(vm);
        return View();
    }

    [HttpPost("register")]
    [ValidateAntiForgeryToken]
    public IActionResult Register(HeroRegistrationViewModel vm)
    {
        if (ModelState.IsValid)
        {
            HttpContext.Session.SetString("Name", vm.Name);
            HttpContext.Session.SetString("HeroType", vm.HeroType);
            HttpContext.Session.SetInt32("Level", vm.Level ?? 0);
            HttpContext.Session.SetString("Email", vm.Email);
            return RedirectToAction("RegistrationSuccess");
        }
        return View(vm);
    }

    [HttpGet("registration-success")]
    public IActionResult RegistrationSuccess()
    {
        // Retrieve the data from session
        var vm = new SuccessViewModel()
        {
            Name = HttpContext.Session.GetString("Name"),
            HeroType = HttpContext.Session.GetString("HeroType")
        };

        return View(vm); // Returns Views/Hero/RegistrationSuccess.cshtml
    }

}