// var p1 = new Person();

// p1.Age = 23;
// p1.FirstName = "Sal";
// p1.LastName = "Mend";
// var p2 = new Person
// {
//     Age = 21,
//     FirstName = "sadfg",
//     LastName = "Mesadfnd"
// };

// p1.Introduce();

// p2.Introduce();

// var p3 = new Person();

// p3.Introduce();

// var p4 = new Person("sal", "bye", 20);

// p4.Introduce();

/*
    ---- Properties (Getters and setters lesson)
*/

var person1 = new Person("Alice", "Smith", 30);
Console.WriteLine(person1.FullName); // Output: Alice Smith
Console.WriteLine(person1.Id);       // Output: (a unique GUID)

// person1.FullName = "New Name"; // Compile-time error: Cannot assign to 'FullName' because it is a 'get-only' property
// person1.Id = "new_id";        // Compile-time error: The set accessor is inaccessible due to its protection level

var book1 = new Book("Chainsaw Man", "Tatsuki Fujimoto", 2020, "123223235");
var book2 = new Book("Chainsaw Man", "Tatsuki Fujimoto", -1, "123223235");

book1.DisplayBookInfo();
book2.DisplayBookInfo();

var p5 = new Person("John", "Hanby", 40);

p5.Introduce();
Console.WriteLine(p5.IsAdult());


p5.ChangeAge(15);

p5.Introduce();
Console.WriteLine(p5.IsAdult());