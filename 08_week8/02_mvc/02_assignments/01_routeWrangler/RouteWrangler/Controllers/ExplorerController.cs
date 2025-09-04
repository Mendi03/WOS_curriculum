using Microsoft.AspNetCore.Mvc;

namespace RouteWrangler.Controllers;

public class ExplorerController : Controller
{
    [HttpGet("/welcome")]
    public IActionResult Welcome()
    {
        return Content("Welcome to the Explorer Service!");
    }

    [HttpGet("/items/{itemId}")]
    public IActionResult DisplayItem(int itemId)
    {
        return Content($"Viewing item with ID: {itemId}");
    }

    [HttpGet("/calculate/{operation}/{num1}/{num2}")]
    public IActionResult Calculator(string operation, int num1, int num2)
    {
        return Content($"Performing {operation} on {num1} and {num2}.");
    }

    [HttpGet("/profile/{username}/details/{detailType}")]
    public IActionResult Calculator(string username, string detailType)
    {
        return Content($"Fetching {detailType} for user {username}.");
    }

    [HttpGet("/repeat/{word}/times/{num}")]
    public IActionResult WordRepeater(string word, int num)
    {
        string repeatedString = "";
        for (int i = 0; i < num; i++)
        {
            repeatedString += word + "\n";
        }
        return Content($"Will repeat '{word}' {num} times:\n{repeatedString} ");
    }

    [HttpGet("/products/filter")]
    public IActionResult FilterProducts(string? category, decimal? maxPrice)
    {
        string response = "Filtering products";

        if (!string.IsNullOrEmpty(category))
        {
            response += $" by category: '{category}'";
        }
        if (maxPrice.HasValue)
        {
            response += $" with max price: {maxPrice.Value}";
        }
        if (string.IsNullOrEmpty(category) && !maxPrice.HasValue)
        {
            response = "No filter given. Displaying all products";
        }
        return Content(response);
    }

    [HttpGet("/list/sort")]
    public IActionResult SortList(string orderBy, string direction)
    {
        string response = "Sorting list";

        if (!string.IsNullOrEmpty(orderBy))
        {
            response += $" by '{orderBy}'";
        }
        if (!string.IsNullOrEmpty(direction))
        {
            response += $" in {direction} order";
        }
        if (string.IsNullOrEmpty(orderBy) && string.IsNullOrEmpty(direction))
        {
            response = "No specific sorting provided. Sorting list in default order";
        }
        return Content(response);
    }
}