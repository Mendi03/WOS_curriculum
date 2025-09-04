Console.WriteLine("🎲 Dice Roller Stats");

int rolls = GetRollCount();
var rng = new Random();
var totals = new int[13]; // totals[0] and totals[1] will be unused, sums range from 2 to 12

for (int i = 0; i < rolls; i++)
{
    int die1 = rng.Next(1, 7); // Generates a random number between 1 (inclusive) and 7 (exclusive), so 1-6
    int die2 = rng.Next(1, 7);
    int sum = die1 + die2;
    totals[sum]++; // Increment the count for this sum
}

Console.WriteLine($"\nResults after {rolls} rolls:\n");

// Display results for sums 2 through 12
for (int i = 2; i <= 12; i++)
{
    Console.WriteLine($"Sum {i}: {totals[i]} times");
}

int mostFrequent = 2; // Initialize with 2, as it's the first possible sum
for (int i = 3; i <= 12; i++) // Start from 3 to compare with mostFrequent
{
    if (totals[i] > totals[mostFrequent])
    {
        mostFrequent = i;
    }
}

Console.WriteLine($"\n🎉 Most common total: {mostFrequent} ({totals[mostFrequent]} times)");


// Helper method to get a valid number of rolls from the user
static int GetRollCount()
{
    while (true)
    {
        Console.Write("Enter the number of rolls: ");
        string? input = Console.ReadLine();

        if (int.TryParse(input, out int rolls) && rolls > 0)
        {
            return rolls;
        }

        Console.WriteLine("Please enter a valid positive number.");
    }
}