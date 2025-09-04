class Mage : Hero
{
    public string SpellType { get; set; }

    public Mage(string heroName, string type, int initialHealth, int initialAttackPower, string spellType) : base(heroName, type, initialHealth, initialAttackPower)
    {
        SpellType = spellType;
    }

    public override void PerformSpecialAbility()
    {
        Console.WriteLine($"{Name} casts a powerful {SpellType} spell!");
    }
    public override void DisplayHeroInfo()
    {
        Console.WriteLine($"Hero Information:\nName: {Name}\nHero type: {HeroType}\nHealth: {Health}\nAttack power: {AttackPower}\nSpell type: {SpellType}\n");

    }
    public override void PerformAttack(string target)
    {
        Console.WriteLine($"{Name} unleashes a magical bolt at {target} for {AttackPower} damage!");
    }
}