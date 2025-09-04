using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using StrongViews.Models;

namespace StrongViews.Controllers;

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

    [HttpGet("show-product-details")]
    public IActionResult ShowProductDetails()
    {
        // Create an instance of our Product model
        var product = new Product
        {
            Id = 101,
            Name = "Wireless Gaming Headset",
            Price = 149.99m,
            IsAvailable = true,
            Description = "Immersive sound and comfortable design for serious gamers."
        };

        // Pass the product object directly to the View() helper
        return View(product); // This will look for Views/Home/ShowProductDetails.cshtml
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
