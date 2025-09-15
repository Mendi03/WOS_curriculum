using System.ComponentModel.DataAnnotations;

public class Rating
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public int MovieId { get; set; }
    public int userRating { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}