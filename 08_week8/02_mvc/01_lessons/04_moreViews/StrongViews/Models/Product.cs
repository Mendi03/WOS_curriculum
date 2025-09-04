namespace StrongViews.Models; // Ensure this matches your project's namespace

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public bool IsAvailable { get; set; }
    public string Description { get; set; }
}