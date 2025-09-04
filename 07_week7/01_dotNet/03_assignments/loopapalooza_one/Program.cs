
// 1 Declare and Initialize Temperatures Array:
int[] dailyTemperatures = { 72, 65, 80, 45, 58, 70, 50 };

// var input = true;


// while (input)
// {
//     Console.ReadLine.
// }

// 2 Calculate and Print Total and Average Temperature:
int totalTemp = 0;

for (int i = 0; i < dailyTemperatures.Length; i++)
{
    totalTemp += dailyTemperatures[i];
}

double tempAverages = Math.Round(totalTemp / 1.0 / dailyTemperatures.Length, 2);

System.Console.WriteLine($"Total Temperature: {totalTemp} \nAverage Temperature: {tempAverages}");

// 3 Count Warm and Cold Days:
int warmDaysCount = 0;
int coldDaysCount = 0;

foreach (var temp in dailyTemperatures)
{
    if (temp < 70)
    {
        coldDaysCount++;
    }
    else
    {
        warmDaysCount++;
    }
}

System.Console.WriteLine($"Number of Warm Days: {warmDaysCount} \nNumber of Cold Days: {coldDaysCount}");

// 4 Display Temperatures with Status

for (int i = 0; i < dailyTemperatures.Length; i++)
{
    System.Console.WriteLine($"Day {i + 1} Temperature: {dailyTemperatures[i]}°F - {(dailyTemperatures[i] < 70 ? "Cold" : "Warm")} day");
}

// Jam Master

int lowestTemp = dailyTemperatures[0];
int highestTemp = dailyTemperatures[0];

for (int i = 0; i < dailyTemperatures.Length; i++)
{
    if (dailyTemperatures[i] < lowestTemp)
    {
        lowestTemp = dailyTemperatures[i];
    }
    if (dailyTemperatures[i] > highestTemp)
    {
        highestTemp = dailyTemperatures[i];
    }
}

System.Console.WriteLine($"Highest temp: {highestTemp}");
System.Console.WriteLine($"Lowest temp: {lowestTemp}");



