class ShieldEmitter : ElectronicDevice, IRechargeable
{
    public int ShieldStrength { get; set; }
    public ShieldEmitter(string name, int initialBatteryLevel, int shieldStrength) : base(name, initialBatteryLevel)
    {
        ShieldStrength = shieldStrength;
    }

    public void Recharge()
    {
        BatteryLevel = 100;
        Console.WriteLine($"{Name} defensive field is fully recharged!");
    }

    public override void Use()
    {
        if (!IsOn)
        {
            Console.WriteLine($"{Name} is not turned on!");
        }
        else if (BatteryLevel <= 0)
        {
            Console.WriteLine($"{Name} has no more battery. Shield not deployed");
        }
        else
        {
            Console.WriteLine($"{Name}'s capacitors are fully charged!");
            BatteryLevel -= 10;
        }

    }
}