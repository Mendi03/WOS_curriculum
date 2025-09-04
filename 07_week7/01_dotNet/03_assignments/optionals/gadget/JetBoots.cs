class JetBoots : ElectronicDevice, IRechargeable
{
    public double ThrustPower { get; set; }

    public JetBoots(string name, int initialBatteryLevel, double thrustPower) : base(name, initialBatteryLevel)
    {
        ThrustPower = thrustPower;
    }
    public void Recharge()
    {
        BatteryLevel = 100;
        Console.WriteLine($"{Name} fuel cells are topped up!");
    }

    public override void Use()
    {
        if (!IsOn)
        {
            Console.WriteLine($"{Name} is not turned on!");
        }
        else if (BatteryLevel <= 0)
        {
            Console.WriteLine($"Unfortunately, {Name} have no more thrust energy");
        }
        else
        {
            Console.WriteLine($"{Name} blasts off with {ThrustPower} thrust!");
            BatteryLevel -= 25;
        }

    }
}