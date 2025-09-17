using System.ComponentModel.DataAnnotations;

namespace TheGroanZone.Models;

public class Rating
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public int JokeId { get; set; }
    public int UserRating { get; set; }
    public User? User { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}