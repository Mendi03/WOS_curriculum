using MovieNightMetrics.Classes;

var movies = Serializer.DeserializeFromFile<List<Movie>>("Data/movies.json");

if (movies is null)
{
    Console.WriteLine("Failed to load games.");
    return;
}

// DateOnly objects can be compared directly using comparison operators.
// You will need to create DateOnly objects for the start and end of the decade.

// 1 - Movies from the 90s:
var NYD1990 = new DateOnly(1990, 1, 1);
var NYE1999 = new DateOnly(1999, 12, 31);

var movies90s = movies
    .Where(m => m.ReleaseDate >= NYD1990 && m.ReleaseDate <= NYE1999);

ConsoleUtils.PrintEach(movies90s, "90's movies");

// 2 - Top 5 Highest Rated Movies

var top5Movies = movies
.OrderByDescending(movie => movie.Rating)
.Take(5)
.Select(movie => new { movie.Title, Rating = movie.Rating, movie.Director });

ConsoleUtils.PrintEach(top5Movies, "Top 5 Movies");

// 3 - Metrics on "Action" Movies:

var actionMovies = movies.Where(movie => movie.Genre == "Action");

var totalActionMovies = actionMovies.Count();
var avgDurationOfActionMovies = actionMovies.Average(movie => movie.DurationInMinutes);
var latestAction = actionMovies
.OrderByDescending(movie => movie.ReleaseDate)
.FirstOrDefault();

Console.WriteLine($"Total Action Movies: {totalActionMovies}\n\nAverage duration of ActionMovies: {avgDurationOfActionMovies}\n\nLatest Released Action Movie: {latestAction}\n");

// 4 - Highest-Rated "Drama" Movie:

var highestRatedDrama = movies
    .Where(movie => movie.Genre == "Drama")
    .OrderByDescending(movie => movie.Rating)
    .Select(movie => new { Title = movie.Title, movie.Rating })
    .FirstOrDefault();

Console.WriteLine($"Highest Rated Drama:\n{highestRatedDrama}\n");

// 5 - All Directors

var directors = movies.OrderBy(m => m.Director).Select(m => m.Director).ToList().Distinct();

ConsoleUtils.PrintEach(directors, "Directors in Movies list");