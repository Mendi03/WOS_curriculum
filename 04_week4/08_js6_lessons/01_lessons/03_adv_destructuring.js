// Destructure an object with at least one default and one renamed variable.

const movie1 = {
    title: "Matrix",
    year: 1999
}

const {title, year: releaseYear, description = "No description"} = movie1;

console.log(title);
console.log(releaseYear);
console.log(description);

// Write a function that returns an array and destructure its result into three variables.
function defaultMovie(){
    return ["Matrix 2",2001, 2, 5];
}

const [title1, year1, ...movieDetails] = defaultMovie();

console.log(title1);
console.log(year1);
console.log(movieDetails);


// Given a nested object, extract a deeply nested property using destructuring.

const pc = {
    cpu: "Ryzen 5",
    psu: 800,
    gpu: {
        company: "Nvidia",
        price: 1000,
        deets: {
            fans: 3,
            powerConsumption: 200
        }
    },
    fans: 5
}

const {
    fans,
    gpu: { company,
        price: gpuCost,
        deets: {
            powerConsumption,
            fans: gpu_fans
        }
    }
} = pc;

console.log(gpuCost);
console.log(fans);
console.log(gpu_fans);
console.log(powerConsumption);