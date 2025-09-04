// Controllers/ProductsController.cs
using Microsoft.AspNetCore.Mvc;

namespace MyFirstMvcApp.Controllers; // Ensure this matches your project's namespace

public class ProductsController : Controller
{
    // Route: /products/{id}
    // Example URL: http://localhost:5000/products/123
    [HttpGet("products/{id}")]
    public IActionResult ProductDetails(int id) // 'id' from the URL segment is bound here
    {
        return Content($"Displaying details for Product ID: {id}");
    }

    // Route: /products/category/{categoryName}/page/{pageNumber}
    // Example URL: http://localhost:5000/products/category/electronics/page/2
    [HttpGet("products/category/{categoryName}/page/{pageNumber}")]
    public IActionResult ProductsByCategory(string categoryName, int pageNumber)
    {
        return Content($"Displaying products in category '{categoryName}', page {pageNumber}.");
    }

    [HttpGet("products/filter")]
    public IActionResult FilterProducts(string? category, decimal? minPrice) // Parameters can be nullable
    {
        string response = "Filtering products:";
        if (!string.IsNullOrEmpty(category))
        {
            response += $" by category '{category}'";
        }
        if (minPrice.HasValue) // Check if minPrice has a value (since it's nullable)
        {
            response += $" with minimum price ${minPrice.Value}";
        }
        if (string.IsNullOrEmpty(category) && !minPrice.HasValue)
        {
            response = "No filter criteria provided. Showing all products.";
        }
        return Content(response);
    }

    // your turn:

    [HttpGet("products/info/{category}/{productId}")]
    public IActionResult ProductInfo(string category, int productId)
    {
        return Content($"Displaying product {productId} from category {category}.");
    }

}