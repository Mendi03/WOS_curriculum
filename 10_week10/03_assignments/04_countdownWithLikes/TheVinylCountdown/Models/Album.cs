using System.ComponentModel.DataAnnotations;

namespace TheVinylCountdown.Models;

public class Album
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;

    // foreign key
    public int UserId { get; set; }

    // navigation
    public User? User { get; set; }
    public List<Like> Likes { get; set; } = [];


    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}