using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ModelPractice.Models;

namespace ModelPractice.Controllers;

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

    [HttpGet("products")]
    public IActionResult ShowProductList()
    {
        var products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 1200.00m, IsOnSale = false },
            new Product { Id = 2, Name = "Smartphone", Price = 800.00m, IsOnSale = true },
            new Product { Id = 3, Name = "Headphones", Price = 150.00m, IsOnSale = true }
        };
        return View(products); // Pass the list of products as the model for the main view
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
