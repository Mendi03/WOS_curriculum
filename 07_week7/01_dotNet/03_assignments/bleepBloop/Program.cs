
using System.Text;

var morseCodeMap = new Dictionary<char, string>
{
    {'a', ".-"},
    {'b', "-..."},
    {'c', "-.-."},
    {'d', "-.."},
    {'e', "."},
    {'f', "..-."},
    {'g', "--."},
    {'h', "...."},
    {'i', ".."},
    {'j', ".---"},
    {'k', "-.-"},
    {'l', ".-.."},
    {'m', "--"},
    {'n', "-."},
    {'o', "---"},
    {'p', ".--."},
    {'q', "--.-"},
    {'r', ".-."},
    {'s', "..."},
    {'t', "-"},
    {'u', "..-"},
    {'v', "...-"},
    {'w', ".--"},
    {'x', "-..-"},
    {'y', "-.--"},
    {'z', "--.."},
    {' ', " / "}
};

Console.WriteLine("Enter a word/phrase to translate:");
var userInput = Console.ReadLine()?.ToLower() ?? " ";

TranslateToMorse(userInput, morseCodeMap);


static List<char> InputToChar(string input)
{
    var inputInCharacters = new List<char>();

    foreach (char character in input)
    {
        inputInCharacters.Add(character);
    }

    return inputInCharacters;
}

static void TranslateToMorse(string input, Dictionary<char, string> morseMap)
{
    var charInput = InputToChar(input); // User's input becomes a List of Characters

    var morsePhrase = new StringBuilder();

    foreach (char character in charInput)
    {
        string morseTranslation;
        if (morseMap.TryGetValue(character, out string? value))
        {
            morseTranslation = value + " ";
        }
        else
        {
            morseTranslation = "[?]";
        }


        morsePhrase.Append(morseTranslation);
    }

    Console.WriteLine($"User Input: {input}, Translation: {morsePhrase}");
}