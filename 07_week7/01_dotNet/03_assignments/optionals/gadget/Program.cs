var watch1 = new LaserWatch("Tiny watch", 100, 30);
var boots = new JetBoots("Hades boots", 100, 50);
var energyShield = new ShieldEmitter("Forcefield", 100, 40);

watch1.PowerOn();
Console.WriteLine($"{watch1.BatteryLevel}");
watch1.Use();
Console.WriteLine($"{watch1.BatteryLevel}");
watch1.PowerOff();
watch1.Recharge();
Console.WriteLine($"{watch1.BatteryLevel}");
watch1.PowerOn();
watch1.Use();
Console.WriteLine($"{watch1.ToString()}");


// boots.PowerOn();
// Console.WriteLine($"{boots.BatteryLevel}");
// boots.Use();
// boots.Use();
// boots.Use();
// boots.Use();
// boots.Use();
// Console.WriteLine($"{boots.BatteryLevel}");
// boots.PowerOff();
// boots.Recharge();
// Console.WriteLine($"{boots.BatteryLevel}");
// boots.PowerOn();
// boots.Use();

// energyShield.PowerOn();
// Console.WriteLine($"{energyShield.BatteryLevel}");
// energyShield.Use();
// Console.WriteLine($"{energyShield.BatteryLevel}");
// energyShield.PowerOff();
// energyShield.Recharge();
// Console.WriteLine($"{energyShield.BatteryLevel}");
// energyShield.PowerOn();
// energyShield.Use();

