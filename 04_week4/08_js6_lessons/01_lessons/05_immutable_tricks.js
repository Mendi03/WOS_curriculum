// Use spread syntax to add an item to an array without using .push()
const nums1 = [1,2,3];
const nums2 = [...nums1, 4, 5];

console.log(nums2);

// Write a function that removes an item by index using .filter()
const to_filter = [542,5143,62345];
const filtered = to_filter.filter((_, i) => i !== 1);

console.log(filtered);


// Use .map() to update an array of objects
const pets = ["dog", "cat", "bird"];
const update_pets = pets.map((pet, i) => {
    if (i === 2) {
        return "snek";
    }
    return pet;
});

console.log(update_pets);


