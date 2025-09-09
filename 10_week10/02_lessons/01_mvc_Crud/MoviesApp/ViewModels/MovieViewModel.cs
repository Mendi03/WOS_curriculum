// ViewModels/MovieViewModel.cs
using System.ComponentModel.DataAnnotations;

namespace MoviesApp.ViewModels;

public class MovieViewModel
{
    // Null on Create; populated on Edit
    public int? Id { get; set; }

    [Required(ErrorMessage = "Title is required")]
    [MinLength(2, ErrorMessage = "Title must be at least two characters.")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Director is required")]
    [MinLength(2, ErrorMessage = "Director must be at least two characters.")]
    public string Director { get; set; } = string.Empty;

    [Required(ErrorMessage = "Genre is required")]
    [MinLength(2, ErrorMessage = "Genre must be at least two characters.")]
    public string Genre { get; set; } = string.Empty;

    [Required(ErrorMessage = "Description is required")]
    [MinLength(10, ErrorMessage = "Description must be at least ten characters.")]
    public string Description { get; set; } = string.Empty;
}