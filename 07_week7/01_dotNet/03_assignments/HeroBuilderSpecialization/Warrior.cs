class Warrior : Hero
{
    public string WeaponType { get; set; }

    public Warrior(string heroName, string type, int initialHealth, int initialAttackPower, string weaponType) : base(heroName, type, initialHealth, initialAttackPower)
    {
        WeaponType = weaponType;
    }

    public override void PerformSpecialAbility()
    {
        Console.WriteLine($"{Name} swings their {WeaponType} in a mighty cleave!"); ;
    }
    public override void DisplayHeroInfo()
    {
        Console.WriteLine($"Hero Information:\nName: {Name}\nHero type: {HeroType}\nHealth: {Health}\nAttack power: {AttackPower}\nWeapon type: {WeaponType}\n");

    }
    public override void PerformAttack(string target)
    {
        Console.WriteLine($"{Name} charges at {target} with their {WeaponType} for {AttackPower} damage!");
    }
}