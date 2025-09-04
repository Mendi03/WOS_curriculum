class BankAcccount
{
    private decimal _balance;
    public string AccountNumber { get; private set; }
    public decimal Balance { get { return _balance; } }

    public BankAcccount(decimal initialBalance)
    {
        AccountNumber = Guid.NewGuid().ToString();
        _balance = initialBalance;
        Console.WriteLine($"New Account was created");
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine($"Cannot deposit an amount less than or equal to 0");
        }
        else
        {
            _balance += amount;
            Console.WriteLine($"Amount was successfully deposited");
            LogTransaction("Deposit", amount);
        }
    }

    public void Withdraw(decimal amount)
    {
        if (amount > Balance)
        {
            Console.WriteLine($"Cannot withdraw an amount greater than your current balance");
        }
        else if (amount <= 0)
        {
            Console.WriteLine($"Cannot withdraw a negative amount");
        }
        else
        {
            _balance -= amount;
            Console.WriteLine($"Amount was successfully withdrawn");
            LogTransaction("Withdrawal", amount);
        }
    }

    private void LogTransaction(string type, decimal amount)
    {
        Console.WriteLine($"[LOG] {type} of {amount} executed on account {AccountNumber}.");
    }
}