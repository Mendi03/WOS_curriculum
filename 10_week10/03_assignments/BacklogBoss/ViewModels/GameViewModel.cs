// ViewModels/MovieViewModel.cs
using System.ComponentModel.DataAnnotations;

namespace BacklogBoss.ViewModels;

public class GameViewModel
{
    // Null on Create; populated on Edit
    public int? Id { get; set; }

    [Required(ErrorMessage = "Title is required")]
    [MinLength(2, ErrorMessage = "Title must be at least two characters.")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Platform is required")]
    [MinLength(2, ErrorMessage = "Platform must be at least two characters.")]
    public string Platform { get; set; } = string.Empty;

    public bool IsComplete { get; set; } = false;

    [Required(ErrorMessage = "Notes is required")]
    [MinLength(5, ErrorMessage = "Notes must be at least five characters.")]
    public string Notes { get; set; } = string.Empty;
}