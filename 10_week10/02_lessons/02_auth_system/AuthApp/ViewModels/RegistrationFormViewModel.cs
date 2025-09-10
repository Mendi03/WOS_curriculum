using System.ComponentModel.DataAnnotations;

namespace AuthApp.ViewModels;

public class RegistrationFormViewModel
{
    [Required(ErrorMessage = "Please enter username")]
    [MinLength(3, ErrorMessage = "Must be at least 3 characters long")]
    public string Username { get; set; } = string.Empty;

    [Required(ErrorMessage = "Please enter Email")]
    [EmailAddress(ErrorMessage = "Please enter valid Emial address")]
    public string Email { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please enter Password")]
    public string Password { get; set; } = string.Empty;

    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Please ConfirmPassword")]
    [Compare("Password", ErrorMessage = "Password do not match silly")]
    public string ConfirmPassword { get; set; } = string.Empty;
}