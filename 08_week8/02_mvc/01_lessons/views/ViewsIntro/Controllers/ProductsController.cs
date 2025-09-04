using Microsoft.AspNetCore.Mvc;

namespace ViewsIntro.Controllers;

public class ProductsController : Controller
{

    // [HttpGet("products")]
    public IActionResult Index()
    {
        return View();
    }
}