namespace TheRewind.ViewModels;

public class MovieViewModel
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateOnly ReleaseDate { get; set; }
    public string Username { get; set; } = string.Empty;
    public string AvgRating { get; set; } = string.Empty;
    public int TotalRatings { get; set; }
    public List<string> UsersThatHaveRated { get; set; } = [];
    public int? UserRating { get; set; }
    public int UserId
    { get; set; }
}