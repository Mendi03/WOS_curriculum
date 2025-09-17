using System.ComponentModel.DataAnnotations;

namespace TheGroanZone.ViewModels;

public class ProfileViewModel
{
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public int JokesAdded { get; set; }
    public int JokesRated { get; set; }
}