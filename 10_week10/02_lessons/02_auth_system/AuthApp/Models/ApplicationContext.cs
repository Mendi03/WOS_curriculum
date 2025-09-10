using Microsoft.EntityFrameworkCore;

namespace AuthApp.Models;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }
}