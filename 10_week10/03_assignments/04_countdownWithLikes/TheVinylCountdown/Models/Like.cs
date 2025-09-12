using System.ComponentModel.DataAnnotations;

namespace TheVinylCountdown.Models;

public class Like
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public int AlbumId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}