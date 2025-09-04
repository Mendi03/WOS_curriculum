using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyFirstMvcApp.Models;

namespace MyFirstMvcApp.Controllers;

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

    // activity:
    public IActionResult Welcome()
    {
        return Content("Welcome to my first custom MVC page!");
    }

    [HttpGet("about")]
    public IActionResult AboutUs()
    {
        return Content("This is the About Us page.");
    }

    [HttpGet("services")]
    public IActionResult Services()
    {
        return Content("This is the Services page.");
    }

    [HttpGet("pricing")]
    public IActionResult Pricing()
    {
        return Content("This is the Pricing page.");
    }

    [HttpGet("contact")]
    public IActionResult Contact()
    {
        return Content("This is the Contact page.");
    }
    // your turn
    [HttpGet("users/{userId}")]
    public IActionResult UserProfile(int userId)
    {
        return Content($"Displaying profile for user ID: {userId}.");
    }

    [HttpGet("orders/search")]
    public IActionResult SearchOrders(string customerName, string orderStatus)
    {
        string response = "Searching Order:";
        if (!string.IsNullOrEmpty(customerName))
        {
            response += $" by Name '{customerName}'";
        }
        if (!string.IsNullOrEmpty(orderStatus)) // Check if minPrice has a value (since it's nullable)
        {
            response += $" by order number {orderStatus}";
        }
        if (string.IsNullOrEmpty(customerName) && string.IsNullOrEmpty(orderStatus))
        {
            response = "Empty search provided. Showing all orders.";
        }
        return Content(response);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
