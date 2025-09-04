namespace RetroGameLibrary.Classes;

public class Game
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Console { get; set; } = string.Empty;
    public int ReleaseYear { get; set; }
    public double Rating { get; set; }

    // This override is crucial for our PrintEach helper method to display a Game object nicely.
    public override string ToString()
    {
        return $@"
        ID: {Id}
        Title: {Title}
        Console: {Console}
        Release Year: {ReleaseYear}
        Rating: {Rating}";
    }
}