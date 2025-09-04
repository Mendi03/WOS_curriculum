using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelPractice.Models;
using ViewModelPractice.ViewModels;

namespace ViewModelPractice.Controllers;

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

    [HttpGet("products/{id}")]
    public IActionResult ProductDetails(int id)
    {
        // For now, we'll hardcode some data. Later, this would come from a database.
        var viewModel = new ProductDetailsViewModel
        {
            ProductId = id,
            ProductName = "High-Performance CPU",
            Price = 399.99m,
            InStock = true,
            Features = ["8 Cores", "16 Threads", "4.5 GHz Boost"],
        };

        // Pass the ViewModel object directly to the View() helper method
        return View(viewModel); // This will look for Views/Home/ProductDetails.cshtml
    }

    [HttpGet("dashboard")]
    public IActionResult Dashboard()
    {
        var viewModel = new DashboardViewModel
        {
            UserName = "Is Me",
            TotalItems = 20,
            LastLogin = DateTime.Now
        };

        return View(viewModel);
    }

    [HttpGet("musicians/register")]
    public IActionResult RegisterMusician()
    {
        // Pass an empty ViewModel to the View to be filled by the user
        // var viewModel = new MusicianRegistrationViewModel();
        return View(); // This will look for Views/Home/RegisterMusician.cshtml
    }

    [HttpPost("musicians/register")]
    public IActionResult RegisterMusician(MusicianRegistrationViewModel viewModel)
    {
        // 1. Check if the model is valid based on the DataAnnotations attributes
        if (ModelState.IsValid)
        {
            // 2. If valid, process the data (e.g., save to a database, redirect)
            // For now, let's store the submitted data in session and redirect
            HttpContext.Session.SetString("Name", viewModel.Name);
            HttpContext.Session.SetInt32("YearsExperience", viewModel.YearsExperience ?? 0);
            HttpContext.Session.SetString("Instrument", viewModel.Instrument);
            return RedirectToAction("RegistrationSuccess");
        }

        // 3. If invalid, return the same view with the viewModel to display errors
        return View(viewModel); // The viewModel now contains the submitted data AND validation errors
    }

    [HttpGet("registration-success")]
    public IActionResult RegistrationSuccess()
    {
        // Retrieve the data from session
        string? name = HttpContext.Session.GetString("Name");
        int? yearsExperience = HttpContext.Session.GetInt32("YearsExperience");
        string? instrument = HttpContext.Session.GetString("Instrument");

        // Pass the data to the view using ViewBag
        ViewBag.Name = name;
        ViewBag.YearsExperience = yearsExperience;
        ViewBag.Instrument = instrument;

        return View(); // Returns Views/Home/RegistrationSuccess.cshtml
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
