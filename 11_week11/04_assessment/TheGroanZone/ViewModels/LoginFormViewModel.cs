using System.ComponentModel.DataAnnotations;

namespace TheGroanZone.ViewModels;

public class LoginFormViewModel
{
    [Required(ErrorMessage = "Please enter email")]
    [MinLength(2, ErrorMessage = "Email must be at least 2 characters")]
    public string Email { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please enter password")]
    public string Password { get; set; } = string.Empty;

    public string? Message { get; set; }
}