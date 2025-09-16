using Microsoft.AspNetCore.Mvc;

[Route("error/")]
public class ErrorController : Controller
{
    [HttpGet("{code}")]
    public IActionResult Handle(int code)
    {
        if (code == 404)
        {
            // Serve a custom view for 404 errors
            return View("PageNotFound");
        }
        else if (code == 401)
        {
            // Serve a custom view for 404 errors
            return View("Unauthorized");
        }

        // Optional: handle other codes
        return View("ServerError");
    }

    [HttpGet("boom")]
    public IActionResult Boom()
    {
        // This is a test method that will intentionally throw a 500 error.
        // It's a useful way to test our custom error page without introducing a bug.
        return new StatusCodeResult(500);
    }
}