using System.ComponentModel.DataAnnotations;

namespace TheRewind.Models;

public class Movie
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateOnly ReleaseDate { get; set; }

    // Foreign key
    public int UserId { get; set; }

    // navigation
    public User? User { get; set; }
    public List<Rating> Ratings { get; set; } = [];


    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}