using System.ComponentModel.DataAnnotations;

namespace AlbumCrud.Models;

public class Album
{
    [Key]
    public int Id { get; set; }
    public int Rank { get; set; }
    public string Artist { get; set; } = "";
    public int ReleaseYear { get; set; }
    public string Genre { get; set; } = "";
    public string AlbumTitle { get; set; } = "";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}