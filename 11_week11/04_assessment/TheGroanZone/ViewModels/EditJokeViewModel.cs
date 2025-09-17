using System.ComponentModel.DataAnnotations;

namespace TheGroanZone.ViewModels;

public class EditJokeViewModel
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Setup must be at least 2 characters")]
    [MinLength(2, ErrorMessage = "Setup must be at least 2 characters")]
    public string Setup { get; set; } = string.Empty;

    [Required(ErrorMessage = "Punchline must be at least 2 characters")]
    [MinLength(2, ErrorMessage = "Punchline must be at least 2 characters")]
    public string Punchline { get; set; } = string.Empty;

    public int UserId { get; set; }

}