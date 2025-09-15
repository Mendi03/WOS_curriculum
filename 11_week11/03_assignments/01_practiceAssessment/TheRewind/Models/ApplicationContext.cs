using Microsoft.EntityFrameworkCore;

namespace TheRewind.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Movie> Movies { get; set; }
    public DbSet<Rating> Ratings { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }
}