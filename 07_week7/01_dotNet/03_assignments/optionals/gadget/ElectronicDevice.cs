abstract class ElectronicDevice
{
    private int _batteryLevel;
    public string Name { get; set; }
    public int BatteryLevel
    {
        get
        {
            return _batteryLevel;
        }
        protected set
        {
            if (value < 0)
            {
                _batteryLevel = 0;
            }
            else if (value > 100)
            {
                _batteryLevel = 100;
            }
            else
            {
                _batteryLevel = value;
            }
        }
    }
    public bool IsOn { get; private set; }

    public ElectronicDevice(string name, int initialBatteryLevel)
    {
        BatteryLevel = initialBatteryLevel;
        Name = name;
        IsOn = false;
    }

    public void PowerOn()
    {
        if (BatteryLevel == 0)
        {
            Console.WriteLine($"{Name} cannot power on: Battery is empty.");
        }
        else
        {
            IsOn = true;
            Console.WriteLine($"{Name} is now ON.");
        }
    }

    public void PowerOff()
    {
        IsOn = false;
        Console.WriteLine($"{Name} is now OFF.");
    }

    public abstract void Use();
}