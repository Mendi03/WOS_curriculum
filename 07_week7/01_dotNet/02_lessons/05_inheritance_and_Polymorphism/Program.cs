// Program.cs

// Create instances of derived classes
Dog myDog = new Dog("Buddy", 3, "Golden", "Golden Retriever");
Cat myCat = new Cat("Whiskers", 5, "Tabby", true);
Mammal genericMammal = new Mammal("Leo", 7, "Brown");

Console.WriteLine("--- Direct Calls ---");
myDog.MakeSound();         // Output: Buddy barks loudly!
myCat.MakeSound();         // Output: Whiskers meows softly.
genericMammal.MakeSound(); // Output: Leo makes a generic mammal sound.

Console.WriteLine("\n--- Polymorphic Calls (Using Base Class Reference) ---");

// Declare variables of the BASE CLASS type (Mammal)
Mammal mammal1 = myDog;         // A Mammal reference pointing to a Dog object
Mammal mammal2 = myCat;         // A Mammal reference pointing to a Cat object
Mammal mammal3 = genericMammal; // A Mammal reference pointing to a Mammal object

// Call MakeSound() on the BASE CLASS references
mammal1.MakeSound(); // Output: Buddy barks loudly! (Dog's overridden method is called!)
mammal2.MakeSound(); // Output: Whiskers meows softly. (Cat's overridden method is called!)
mammal3.MakeSound(); // Output: Leo makes a generic mammal sound. (Mammal's method is called!)

Console.WriteLine("\n--- Polymorphism in a List ---");

// We can store different derived types in a List of the base type
var zooAnimals = new List<Mammal>();
zooAnimals.Add(myDog);
zooAnimals.Add(myCat);
zooAnimals.Add(genericMammal);
zooAnimals.Add(new Dog("Max", 2, "Black", "Labrador"));
zooAnimals.Add(new Cat("Mittens", 1, "White", false));

foreach (Mammal animal in zooAnimals)
{
    Console.Write($"Hello, my name is {animal.Name}. ");
    animal.MakeSound(); // The correct MakeSound() for each animal's actual type is called!
    animal.Eat("meat");
}
// Output will show different sounds for different animals, even though we're calling MakeSound() on a 'Mammal' type.