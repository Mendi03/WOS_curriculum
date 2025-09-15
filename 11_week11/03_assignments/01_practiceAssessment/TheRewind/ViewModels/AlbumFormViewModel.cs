using System.ComponentModel.DataAnnotations;

namespace TheRewind.ViewModels;

public class AlbumFormViewModel
{
    [Required(ErrorMessage = "Please enter Album Title")]
    [MinLength(2, ErrorMessage = "Album must be at least 2 characters")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter Artist")]
    [MinLength(2, ErrorMessage = "Artist must be at least 2 characters")]
    public string Artist { get; set; } = string.Empty;

    // foreign key
    // public int UserId { get; set; }
}