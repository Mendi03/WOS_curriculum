class Hero
{
    public string Name { get; set; }
    public string HeroType { get; set; }
    private int _health;
    public int Health
    {
        get
        {
            return _health;
        }
        set
        {
            if (value >= 0 && value <= 100)
            {
                _health = value;
            }
            else
            {
                Console.WriteLine($"Health initialization out of bounds. Health value must be between 0 and 100");
                _health = 0;
            }
        }
    }
    private int _attackPower;
    public int AttackPower
    {
        get
        {
            return _attackPower;
        }
        set
        {
            if (value > 0)
            {
                _attackPower = value;
            }
            else
            {
                Console.WriteLine($"Attack Power out of bounds. Must be greater than 0");
                _attackPower = 1;
            }
        }
    }

    public bool IsAlive
    {
        get { return Health != 0; }
    }

    public Hero()
    {
        Name = "Unknown Hero";
        HeroType = "Adventurer";
        Health = 100;
        AttackPower = 10;
    }
    public Hero(string heroName, string type, int initialHealth, int initialAttackPower)
    {
        Name = heroName;
        HeroType = type;
        Health = initialHealth;
        AttackPower = initialAttackPower;
    }

    public void DisplayHeroInfo()
    {
        Console.WriteLine($"Hero Information:\nName: {Name}\nHero type: {HeroType}\nHealth: {Health}\nAttack power: {AttackPower}\n");
    }

    public void TakeDamage(int damageAmount)
    {
        if (Health - damageAmount < 0)
        {
            Health = 0;
        }
        else
        {
            Health -= damageAmount;
        }

        Console.WriteLine($"{Name} took {damageAmount} damage. Health: {Health}\n");
        if (!IsAlive)
        {
            Console.WriteLine($"{Name} has been defeated!");
        }
    }

    public void PerformAttack(string target)
    {
        Console.WriteLine($"{Name} the {HeroType} attacks {target} with {AttackPower} damage!\n");
    }

}