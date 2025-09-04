using System.Reflection.Metadata.Ecma335;
using Microsoft.VisualBasic;
namespace AlbumCrud.Classes;

public class Album
{
    public int Id { get; set; }
    public int Rank { get; set; }
    public string Artist { get; set; } = "";
    public int ReleaseYear { get; set; }
    public string Genre { get; set; } = "";
    public string AlbumTitle { get; set; } = "";

    public static List<Album> GetAlbums()
    {
        string filePath = "Data/albums.json";
        return Serializer.DeserializeFromFile<List<Album>>(filePath) ?? [];
    }
}