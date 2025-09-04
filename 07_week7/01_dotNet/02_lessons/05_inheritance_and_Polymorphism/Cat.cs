class Cat : Mammal
{
    public bool IsIndoor { get; set; }
    public Cat(string name, int age, string furColor, bool isIndoor) : base(name, age, furColor)
    {
        IsIndoor = isIndoor;
    }

    public override void MakeSound()
    {
        Console.WriteLine($"{Name} meows!!!");
    }

    public override void Eat(string food)
    {
        Console.WriteLine($"{Name} elegantly bites the {food}");

    }
}