namespace TheGroanZone.ViewModels;

public class JokeViewModel
{
    public int Id { get; set; }
    public string Setup { get; set; } = string.Empty;
    public string Punchline { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty; // Holds the Username for the user that submitted the joke
    public string AvgRating { get; set; } = string.Empty;
    public int TotalRatings { get; set; }
    public List<string> UsersThatHaveRated { get; set; } = [];
    public int? UserRating { get; set; } // Specific rating a user has given. Used to determine the rating a user gave to a joke
    public int UserId { get; set; }
    public String CreatedAt { get; set; } = string.Empty;

}