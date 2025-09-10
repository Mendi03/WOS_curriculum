using System.ComponentModel.DataAnnotations;

namespace AuthForge.ViewModels;

public class RegistrationFormViewModel
{
    [Required(ErrorMessage = "Please enter email")]
    [MinLength(2, ErrorMessage = "Email must be at least 2 characters")]
    public string Email { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please enter password")]
    public string Password { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please confirm your Password")]
    [Compare("Password", ErrorMessage = "Passwords do not match silly. Please try again")]
    public string ConfirmPassword { get; set; } = string.Empty;
}