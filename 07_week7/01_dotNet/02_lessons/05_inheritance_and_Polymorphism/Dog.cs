class Dog : Mammal
{
    public string Breed { get; set; }

    public Dog(string name, int age, string furColor, string breed) : base(name, age, furColor)
    {
        Breed = breed;
    }

    public override void MakeSound()
    {
        Console.WriteLine($"{Name} barks!!!");
    }

    public override void Eat(string food)
    {
        Console.WriteLine($"{Name} chows down {food} like nothing else.");

    }
}