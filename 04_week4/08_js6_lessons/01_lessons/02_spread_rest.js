// Use spread to copy an array and add more items
const list1 = [1,5,8,3];
const list2 = [4,1,...list1, 20];

console.table(Array(list2));

//Write a function that logs all arguments using the rest operator
function print(...args){
    console.log(args);
}

print("a", "b", "c", "d");
print(1,"hello", true, "yaboy", 1, 2);

//Write a function that accepts one named argument and collects the rest

function print2(first, second, ...rest){
    console.log("First: " + first);
    console.log(`Second: ${second}`);
    console.log(`Rest: ${rest}`);
    console.log(typeof(rest));
    
}


print2(1,"hello", true, "yaboy", 1, 2);
print2(1,"hello", "yaboy", "yaboy2", "yaboy3", "yaboy4");
print2("f","h", "y", "y", "y", "y");

function firstAndRest(first, ...others) {
  console.log("First:", first);
  console.log("Rest:", others);
}

firstAndRest("a", "b", "c", "d");