using Microsoft.EntityFrameworkCore;

namespace TheRewind.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
    // public DbSet<Album> Albums { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }
}