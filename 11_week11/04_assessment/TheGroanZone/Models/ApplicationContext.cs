using Microsoft.EntityFrameworkCore;

namespace TheGroanZone.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Joke> Jokes { get; set; }
    public DbSet<Rating> Ratings { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }
}