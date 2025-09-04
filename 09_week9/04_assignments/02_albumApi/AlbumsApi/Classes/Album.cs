using Microsoft.VisualBasic;
namespace AlbumsApi.Classes;

public class Album
{
    public int Id { get; set; }
    public int Rank { get; set; }
    public string Artist { get; set; } = "";
    public int ReleaseYear { get; set; }
    public string Genre { get; set; } = "";
    public string AlbumTitle { get; set; } = "";
}