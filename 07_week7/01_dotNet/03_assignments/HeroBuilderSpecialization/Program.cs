var heroes = new List<Hero>
{
    new Warrior("Guts", "Sworsdsman", 60, 15, "Greatsword"),
    new Mage("Eolka", "Magician", 60, 15, "Fireball")
};

foreach (var hero in heroes)
{
    hero.DisplayHeroInfo();
    hero.PerformSpecialAbility();
}

// Hero1

// Jam Master

Console.WriteLine($"-------------------- Legendary Battle Alert!!! -------------------------\n\n");

var Luffy = new Warrior("Straw Hat Luffy", "Pirate Rubber Man", 26, 6, "Fists");
var Kaido = new Warrior("Kaido", "Pirate", 30, 5, "Club");

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