abstract class Employee
{
    string Name { get; set; }
    string EmployeeId { get; set; }

    protected Employee(string name, string employeeId)
    {
        Name = name;
        EmployeeId = employeeId;
    }

    public abstract decimal CalculateSalary();
    public void DisplayEmployeeDetails()
    {
        Console.WriteLine($"Id: {EmployeeId}, Employee name: {Name}");
    }

}