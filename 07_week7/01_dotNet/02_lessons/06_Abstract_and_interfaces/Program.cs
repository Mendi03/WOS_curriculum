var employees = new List<Employee>()
{
    new FullTimeEmployee("Me", "asfd", 50000),
    new PartTimeEmployee("you", "jety", 15, 160)
};

foreach (var emp in employees)
{
    emp.DisplayEmployeeDetails();
    Console.WriteLine($"Salary: {emp.CalculateSalary()}");
}

// Interface lesson:

var shapes = new List<IDrawable>
{
    new Circle(),
    new Square()
};

// Console.WriteLine(shapes[0].Radius); // doesn't work?

foreach (var shape in shapes)
{
    shape.Draw();
}