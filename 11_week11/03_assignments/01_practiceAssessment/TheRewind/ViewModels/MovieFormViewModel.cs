using System.ComponentModel.DataAnnotations;

namespace TheRewind.ViewModels;

public class MovieFormViewModel
{

    [Required(ErrorMessage = "Title must be at least 2 characters")]
    [MinLength(2, ErrorMessage = "Title must be at least 2 characters")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Genre must be at least 2 characters")]
    [MinLength(2, ErrorMessage = "Genre must be at least 2 characters")]
    public string Genre { get; set; } = string.Empty;

    [Required(ErrorMessage = "Description must be at least 2 characters")]
    [MinLength(2, ErrorMessage = "Description must be at least 2 characters")]
    public string Description { get; set; } = string.Empty;

    [Range(typeof(DateOnly), "1/1/1888", "12/31/2030", ErrorMessage = "Date must be between 1888 and 2031")]
    [DataType(DataType.Date)]
    public DateOnly ReleaseDate { get; set; } = DateOnly.FromDateTime(DateTime.Today);

}