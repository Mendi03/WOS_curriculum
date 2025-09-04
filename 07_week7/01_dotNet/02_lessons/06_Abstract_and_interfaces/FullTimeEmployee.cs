class FullTimeEmployee : Employee
{
    public decimal AnnualSalary { get; set; }
    public FullTimeEmployee(string name, string employeeId, decimal annualSalary) : base(name, employeeId)
    {
        AnnualSalary = annualSalary;
    }

    public override decimal CalculateSalary()
    {
        return AnnualSalary;
    }
}