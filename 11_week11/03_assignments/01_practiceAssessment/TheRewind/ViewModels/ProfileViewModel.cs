using System.ComponentModel.DataAnnotations;

namespace TheRewind.Models;

public class ProfileViewModel
{
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public int MoviesAdded { get; set; }
    public int MoviesRated { get; set; }
}