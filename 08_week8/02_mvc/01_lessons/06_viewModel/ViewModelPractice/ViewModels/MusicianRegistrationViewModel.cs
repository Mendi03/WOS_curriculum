// ViewModels/MusicianRegistrationViewModel.cs
using System.ComponentModel.DataAnnotations;
namespace ViewModelPractice.ViewModels;

public class MusicianRegistrationViewModel
{
    [Required(ErrorMessage = "Musician Name is required.")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters.")]
    [MaxLength(45, ErrorMessage = "Name cannot be longer than 45 characters.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Years experience is required.")]
    [Range(0, 100, ErrorMessage = "Years of experience must be between 0 and 100.")]
    public int? YearsExperience { get; set; } = 0;

    [Required(ErrorMessage = "Instrument is required.")]
    [MinLength(2, ErrorMessage = "Instrument must be at least 2 characters.")]
    [MaxLength(45, ErrorMessage = "Instrument name cannot be longer than 45 characters.")]
    public string Instrument { get; set; } = string.Empty;
}