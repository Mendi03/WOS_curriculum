using Microsoft.EntityFrameworkCore;

namespace BacklogBoss.Models;

public class GameContext : DbContext
{
    public DbSet<Game> Games { get; set; }

    public GameContext(DbContextOptions<GameContext> options) : base(options) { }
}