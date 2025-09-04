var acc1 = new BankAcccount(20000);

acc1.Deposit(5);
Console.WriteLine($"Balance: {acc1.Balance}");

acc1.Withdraw(1000);
Console.WriteLine($"Balance: {acc1.Balance}");

acc1.Deposit(-5);
Console.WriteLine($"Balance: {acc1.Balance}");


acc1.Withdraw(100000);
Console.WriteLine($"Balance: {acc1.Balance}");

// acc1._balance;

