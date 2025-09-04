using System.ComponentModel.DataAnnotations;

namespace HeroForm.ViewModels;

public class HeroRegistrationViewModel
{
    [Required(ErrorMessage = "Hero Name is required.")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters.")]
    [MaxLength(45, ErrorMessage = "Name cannot be longer than 45 characters.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Hero type is required.")]
    [MinLength(2, ErrorMessage = "Hero type must be at least 2 characters.")]
    [MaxLength(45, ErrorMessage = "Hero type cannot be longer than 45 characters.")]
    public string HeroType { get; set; } = string.Empty;

    [Required(ErrorMessage = "Level is required.")]
    [Range(0, 100, ErrorMessage = "Level must be between 0 and 100.")]
    public int? Level { get; set; } = 0;

    [Required(ErrorMessage = "Email is required.")]
    [MinLength(2, ErrorMessage = "Email must be at least 2 characters.")]
    [MaxLength(45, ErrorMessage = "Email name cannot be longer than 45 characters.")]
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; } = string.Empty;
}