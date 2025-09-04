using System.Text.Json;

namespace MovieApi.Classes;

public class Serializer
{
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNameCaseInsensitive = true,
    };

    public static T? DeserializeFromFile<T>(string filePath)
    {
        if (!File.Exists(filePath))
            throw new FileNotFoundException($"Could not find file: {filePath}");

        string json = File.ReadAllText(filePath);
        return JsonSerializer.Deserialize<T>(json, JsonOptions);
    }
}
