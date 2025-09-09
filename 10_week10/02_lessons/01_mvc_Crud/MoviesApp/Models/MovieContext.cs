// Models/MovieContext.cs
using Microsoft.EntityFrameworkCore;

namespace MoviesApp.Models;

public class MovieContext : DbContext
{
    public DbSet<Movie> Movies { get; set; }

    public MovieContext(DbContextOptions<MovieContext> options)
        : base(options) { }
}