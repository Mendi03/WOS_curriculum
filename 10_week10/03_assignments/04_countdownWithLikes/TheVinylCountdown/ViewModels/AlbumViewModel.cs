namespace TheVinylCountdown.ViewModels;

public class AlbumViewModel
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public int UserId { get; set; }

    public int LikeCount { get; set; }
    public bool LikedByMe { get; set; }
}