using Microsoft.EntityFrameworkCore;

namespace TheVinylCountdown.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Album> Albums { get; set; }
    public DbSet<Like> Likes { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }
}