using System.ComponentModel.DataAnnotations;

namespace TheVinylCountdown.ViewModels;

public class RegistrationFormViewModel
{
    [Required(ErrorMessage = "Please enter Username")]
    [MinLength(2, ErrorMessage = "Username must be at least 2 characters")]
    public string Username { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter email")]
    [MinLength(2, ErrorMessage = "Email must be at least 2 characters")]
    public string Email { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please enter password")]
    [MinLength(8, ErrorMessage = "Password must at least have 8 characters")]
    [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$", ErrorMessage = "Must contain at least one uppercase letter, one lowercase letter, and one digit")]
    // [RegularExpression(@"^(?=.*[a-z]).+$", ErrorMessage = "Must contain at least one lowercase letter.")]
    // [RegularExpression(@"^(?=.*\d).+$", ErrorMessage = "Must contain at least one lowercase letter.")]
    public string Password { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please confirm your Password")]
    [Compare("Password", ErrorMessage = "Passwords do not match silly. Please try again")]
    public string ConfirmPassword { get; set; } = string.Empty;
}