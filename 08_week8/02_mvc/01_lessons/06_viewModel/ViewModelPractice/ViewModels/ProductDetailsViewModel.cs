// ViewModels/ProductDetailsViewModel.cs
namespace ViewModelPractice.ViewModels;

public class ProductDetailsViewModel
{
    public int ProductId { get; set; }
    public string? ProductName { get; set; }
    public decimal Price { get; set; }
    public bool InStock { get; set; }
    public List<string> Features { get; set; } = [];
}