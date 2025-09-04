var hero1 = new Hero();
var hero2 = new Hero("Alex", "Archer", 60, 15);
var hero3 = new Hero("Rubert", "Barbarian", 80, 20);

// Hero1
hero1.DisplayHeroInfo();
hero1.TakeDamage(20);
hero1.TakeDamage(-20);
hero1.TakeDamage(120);
hero1.PerformAttack("Black Beard");
hero1.PerformAttack("Fortnite");
hero1.PerformAttack("Elon Musk");

hero2.DisplayHeroInfo();
hero2.TakeDamage(20);
hero2.TakeDamage(-20);
hero2.TakeDamage(120);
hero2.PerformAttack("Kaido");
hero2.PerformAttack("Roblox");
hero2.PerformAttack("Mark Zuckerberg");

hero3.DisplayHeroInfo();
hero3.TakeDamage(20);
hero3.TakeDamage(-20);
hero3.TakeDamage(120);
hero3.PerformAttack("Big Mom");
hero3.PerformAttack("TikTok");
hero3.PerformAttack("Jeff Bezos");

// Jam Master

Console.WriteLine($"-------------------- Legendary Battle Alert!!! -------------------------\n\n");

var Luffy = new Hero("Straw Hat Luffy", "Pirate Rubber Man", 26, 6);
var Kaido = new Hero("Kaido", "Pirate", 30, 5);

while (Luffy.IsAlive && Kaido.IsAlive)
{
    Kaido.PerformAttack(Luffy.Name);
    Luffy.TakeDamage(Kaido.AttackPower);

    if (!Luffy.IsAlive)
    {
        Console.WriteLine($"{Kaido.Name} wins with {Kaido.Health} hp left!!!");
        break;
    }

    Luffy.PerformAttack(Kaido.Name);
    Kaido.TakeDamage(Luffy.AttackPower);

    if (!Kaido.IsAlive)
    {
        Console.WriteLine($"{Luffy.Name} wins with {Luffy.Health} hp left!!!!!!");
        break;
    }

}