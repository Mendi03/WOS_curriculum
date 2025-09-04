using RetroGameLibrary.Classes;

var games = Serializer.DeserializeFromFile<List<Game>>("Data/games.json");

if (games is null)
{
    Console.WriteLine("Failed to load games from games.json.");
    return;
}

// ------------------- //
// LINQ Queries go here!
// ------------------- //

var psGames = games.Where((game) => game.Console == "PlayStation");

ConsoleUtils.PrintEach(psGames, "PlayStation Games");

var orderedNesGames = games.Where(game => game.Console == "NES").OrderBy((game) => game.ReleaseYear).ThenByDescending((game) => game.Rating);

ConsoleUtils.PrintEach(orderedNesGames, "NES Games");

// Aggregation & Elements with LINQ

var totalSNESGames = games.Count((g) => g.Console == "SNES");
Console.WriteLine($"Total SNES games: {totalSNESGames}");

var latestReleaseYear = games.Max((g) => g.ReleaseYear);
Console.WriteLine($"Latest release year: {latestReleaseYear}");

var unavailable = games.FirstOrDefault((g) => g.Title == "Sonic the Hedgehog");

if (unavailable == null)
{
    Console.WriteLine($"Game not found");
}
else
{
    Console.WriteLine($"Game found: {unavailable.Title}");
}

// Projection & Conversion with LINQ

//example:
// Chain multiple methods together
var topRatedRecentGames = games
    .Where(game => game.ReleaseYear > 1995) // Filter
    .OrderByDescending(game => game.Rating) // Sort
    .Take(5) // Get the top 5 (Take is another useful method!)
    .Select(game => new { Title = game.Title, Rating = game.Rating }) // Project
    .ToList(); // Execute the query and put results in a List

Console.WriteLine("\nTop 5 Games released after 1995:");
foreach (var game in topRatedRecentGames)
{
    Console.WriteLine($"Title: {game.Title}, Rating: {game.Rating:F1}");
}

// 1

var gameTitles = games.Select(g => g.Title).ToList();

ConsoleUtils.PrintEach(gameTitles, "NES Games");

var psGameList = games
    .Where(g => g.Console == "PlayStation")
    .Select(g => new { FormattedMessage = $"The game {g.Title} was released in {g.ReleaseYear}." })
    .ToList();

Console.WriteLine("\nPlaystation games: ");
foreach (var game in psGameList)
{
    Console.WriteLine(game.FormattedMessage);
}
