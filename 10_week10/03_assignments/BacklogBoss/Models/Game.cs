using System.ComponentModel.DataAnnotations;

namespace BacklogBoss.Models;

public class Game
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Platform { get; set; } = string.Empty;

    [Required]
    public bool IsComplete { get; set; } = false;

    [Required]
    public string Notes { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}