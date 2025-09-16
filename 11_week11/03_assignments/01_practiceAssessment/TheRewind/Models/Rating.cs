using System.ComponentModel.DataAnnotations;
using TheRewind.Models;

public class Rating
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public int MovieId { get; set; }
    public int userRating { get; set; }
    public User? User { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}