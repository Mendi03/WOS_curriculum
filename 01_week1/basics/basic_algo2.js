function doubleIfEven(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
      arr1[i] = arr1[i] * 2;
    }
  }
  return arr1;
}

function printArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let list = [1, 2, 4, 7, -1, -8];

printArrayItems(doubleIfEven(list));

function zeroNegatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }

  return arr;
}

printArrayItems(zeroNegatives(list));

function countBelowThreshold(arr, threshold) {
  let new_list = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < threshold) {
      new_list[count] = arr[i];
      count++;
    }
  }

  return new_list;
}

let list2 = [1, 2, 4, 7, -1, -8, 20, 5, -50];

let lasf = countBelowThreshold(list2, 0);

printArrayItems(lasf);

function swapFirstAndLast(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return arr;
}

let las3 = swapFirstAndLast(list2);

printArrayItems(las3);

function sumEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}

console.log(sumEvens(list2));

function printIndexAndValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i]);
  }
}

printIndexAndValue(list2);

function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(getMax(list2));

function countOdds(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      count++;
    }
  }
  return count;
}

console.log(countOdds(list2));

function allPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return false;
    }
  }

  return true;
}

console.log(allPositive(list2));

function multiplyByIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * i;
  }

  return arr;
}

printArrayItems(multiplyByIndex(list2));
