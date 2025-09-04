class Mammal
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string FurColor { get; set; }

    public Mammal(string name, int age, string furColor)
    {
        Name = name;
        Age = age;
        FurColor = furColor;
    }

    public virtual void MakeSound()
    {
        Console.WriteLine($"{Name} makes a generic sound");
    }

    public virtual void Eat(string food)
    {
        Console.WriteLine($"{Name} eats {food}");

    }
}