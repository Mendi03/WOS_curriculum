namespace MovieNightMetrics.Classes;

public static class ConsoleUtils
{
    public static void PrintEach<T>(IEnumerable<T> items, string msg = "")
    {
        if (!string.IsNullOrWhiteSpace(msg))
            Console.WriteLine("\n" + msg.Center(60, '*'));

        foreach (var item in items)
        {
            Console.WriteLine(item?.ToString());
        }
    }

    public static string Center(this string text, int totalWidth, char paddingChar = ' ')
    {
        if (string.IsNullOrEmpty(text) || totalWidth <= text.Length + 2)
            return text;

        int spaceOccupied = text.Length + 2; // one space on either side
        int padding = totalWidth - spaceOccupied;
        int padLeft = padding / 2;
        int padRight = padding - padLeft;

        return new string(paddingChar, padLeft)
            + " "
            + text
            + " "
            + new string(paddingChar, padRight);
    }
}
