class Circle : IDrawable
{
    public double Radius { get; set; }

    public void Draw()
    {
        Console.WriteLine($"Drawing a circle with radius {Radius}.");
    }
}