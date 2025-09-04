const numbers1 = [1, 3, 5, 6];
const searchNumber1 = 4;
const expected1 = false;

const numbers2 = [4, 5, 6, 8, 12];
const searchNumber2 = 5;
const expected2 = true;

const numbers3 = [3, 4, 6, 8, 12];
const searchNumber3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNumber4 = 2;
const expected4 = 4;

function binarySearch(sortedNumbers, searchNum) {
  let middle = Math.floor(sortedNumbers.length / 2);
  let isFound = false;
  let idxFound;
  for (let i = middle; i < sortedNumbers.length; i++) {
    if (searchNum === sortedNumbers[middle]) {
      isFound = true;
      idxFound = middle;
    } else if (searchNum < sortedNumbers[middle]) {
      middle = Math.floor(middle - middle / 2);
    } else {
      middle += Math.floor((sortedNumbers.length - middle) / 2);
    }
    if (isFound) {
      break;
    }
  }

  if (isFound) {
    let count = 0;
    for (let i = idxFound; sortedNumbers[i] == searchNum; i++) {
      count += 1;
    }
    for (let i = idxFound - 1; sortedNumbers[i] == searchNum; i--) {
      count += 1;
    }
    if (count > 1) return count;
    console.log(count);
    return isFound;
  }
  return false;
}

console.log("Result 1:", binarySearch(numbers1, searchNumber1));
console.log("Expected 1:", { exists: expected1, count: 0 });

console.log("Result 2:", binarySearch(numbers2, searchNumber2));
console.log("Expected 2:", { exists: expected2, count: 1 });

console.log("Result 3:", binarySearch(numbers3, searchNumber3));
console.log("Expected 3:", { exists: expected3, count: 1 });

console.log("Result 4:", binarySearch(numbers4, searchNumber4));
console.log("Expected 4:", { exists: true, count: 4 });
