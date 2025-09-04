class Person
{
    private int _age;
    private string _firstName;
    private string _lastName;

    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age
    {
        get
        {
            return _age;
        }
        set
        {
            if (value >= 0 && value <= 120)
            {
                _age = value;
            }
            else
            {
                Console.WriteLine("Invalid age. Age must be between 0 and 120.");
                _age = 0;
            }
        }
    }

    // Read-only property (get-only)
    public string FullName
    {
        get { return $"{FirstName} {LastName}"; }
    }

    // Property with private set (can be set in constructor, but not from outside)
    public string Id { get; private set; }

    public Person(string fName, string lName, int age)
    {
        FirstName = fName;
        LastName = lName;
        Age = age;
        Id = Guid.NewGuid().ToString();
    }

    public Person()
    {
        FirstName = "Default";
        LastName = "User";
        Age = 0;
        Id = Guid.NewGuid().ToString();
    }

    public void Introduce()
    {
        Console.WriteLine($"Hi, my name is {FirstName} {LastName} and I am {Age} years old.");
    }

    // Instance Method: CelebrateBirthday (modifies object's state)
    public void CelebrateBirthday()
    {
        Age++; // Directly access and modify the Age property of THIS object
        Console.WriteLine($"{FirstName} {LastName} is now {Age} years old! Happy Birthday!");
    }

    // Instance Method: GetFormalIntroduction (returns a value)
    public string GetFormalIntroduction()
    {
        return $"Greetings. My name is {this.FirstName} {this.LastName}."; // Using 'this' explicitly
    }

    public void ChangeAge(int newAge)
    {
        Age = newAge;
    }

    public bool IsAdult()
    {
        return Age >= 18;
    }



}