using System.ComponentModel.DataAnnotations;

namespace TheGroanZone.Models;

public class Joke
{
    [Key]
    public int Id { get; set; }
    public string Setup { get; set; } = string.Empty;
    public string Punchline { get; set; } = string.Empty;
    // Foreign key
    public int UserId { get; set; }

    // navigation
    public User? User { get; set; }
    public List<Rating> Ratings { get; set; } = [];

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}