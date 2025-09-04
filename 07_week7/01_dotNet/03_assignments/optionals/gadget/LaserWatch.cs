class LaserWatch : ElectronicDevice, IRechargeable
{
    public int LaserStrength { get; set; }
    public LaserWatch(string name, int initialBatteryLevel, int laserStrength) : base(name, initialBatteryLevel)
    {
        LaserStrength = laserStrength;
    }

    public void Recharge()
    {
        BatteryLevel = 100;
        Console.WriteLine($"{Name} is fully recharged!");
    }

    public override void Use()
    {
        if (!IsOn)
        {
            Console.WriteLine($"{Name} is not turned on!");
        }
        else if (BatteryLevel <= 0)
        {
            Console.WriteLine($"Unfortunately, {Name} has no more battery");
        }
        else
        {
            Console.WriteLine($"{Name} zaps with a {LaserStrength}-watt laser!");
            BatteryLevel -= 20;
        }

    }

    public override string ToString()
    {
        return $"Laser watch of name: {Name}, with {BatteryLevel}% battery and {LaserStrength} laser strength";
    }
}
