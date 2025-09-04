class Square : IDrawable
{
    public double SideLength { get; set; }

    public void Draw()
    {
        Console.WriteLine($"Drawing a square with side length {SideLength}.");
    }
}