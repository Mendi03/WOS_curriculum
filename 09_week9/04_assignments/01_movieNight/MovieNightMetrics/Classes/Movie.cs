namespace MovieNightMetrics.Classes;

public class Movie
{
    public int MovieId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Director { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public DateOnly ReleaseDate { get; set; }
    public double Rating { get; set; }
    public int DurationInMinutes { get; set; }

    public override string ToString()
    {
        return $@"
MovieID: {MovieId}
Movie: {Title} ({ReleaseDate.ToString("MMMM d, yyyy")}), {DurationInMinutes} min.
Director: {Director}
Genre: {Genre}
Rating: {Rating}";
    }
}
