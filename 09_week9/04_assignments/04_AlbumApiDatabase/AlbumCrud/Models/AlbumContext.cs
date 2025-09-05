using AlbumCrud.Models;
using Microsoft.EntityFrameworkCore;

public class AlbumContext : DbContext
{
    public DbSet<Album> Albums { get; set; }
    public AlbumContext(DbContextOptions<AlbumContext> options) : base(options) { }
}