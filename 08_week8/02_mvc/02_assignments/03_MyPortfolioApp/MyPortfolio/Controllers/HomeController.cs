using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyPortfolio.Models;

namespace MyPortfolio.Controllers;

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

    [HttpGet("/bio")]
    public IActionResult Bio()
    {
        return View();
    }

    [HttpGet("/about")]
    public IActionResult About()
    {
        return View();
    }

    [HttpGet("/contact")]
    public IActionResult Contact()
    {
        return View();
    }

    [HttpGet("/blog")]
    public IActionResult Blog()
    {
        return View();
    }

    [HttpGet("/blog/post1")]
    public IActionResult BlogPost1()
    {
        return View();
    }

    [HttpGet("/blog/post2")]
    public IActionResult BlogPost2()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
