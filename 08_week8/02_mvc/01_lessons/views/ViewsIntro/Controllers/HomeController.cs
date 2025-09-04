using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewsIntro.Models;

namespace ViewsIntro.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [HttpGet("welcome")] // This action will respond to /welcome
    public IActionResult WelcomeUser()
    {
        return View(); // This will look for Views/Home/WelcomeUser.cshtml
    }

    [HttpGet("about")]
    public IActionResult ShowAboutPage()
    {
        return View("~/Views/Home/AboutUs.cshtml");
    }

    [HttpGet("show-interpolation-data")]
    public IActionResult ShowInterpolationData()
    {
        return View(); // Looks for Views/Home/ShowInterpolationData.cshtml
    }
    [HttpGet("show-calcs")]
    public IActionResult ShowCalculations()
    {
        return View(); // Looks for Views/Home/ShowInterpolationData.cshtml
    }

    [HttpGet("show-conditionals")]
    public IActionResult ShowConditionals()
    {
        return View(); // Looks for Views/Home/ShowConditionals.cshtml
    }

    [HttpGet("items-list")]
    public IActionResult NumberedItems()
    {
        return View(); // Looks for Views/Home/ShowConditionals.cshtml
    }

    [HttpGet("product-grid")]
    public IActionResult ProductGrid()
    {
        return View(); // Looks for Views/Home/ShowConditionals.cshtml
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
