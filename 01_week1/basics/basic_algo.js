function print5to50() {
  for (let i = 5; i <= 50; i++) {
    console.log(i);
  }
}

print5to50();

function printEvens10to40() {
  for (let i = 10; i <= 40; i += 2) {
    console.log(i);
  }
}

printEvens10to40();

function printMultiplesOf5() {
  for (let i = 5; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

printMultiplesOf5();

function printReverse20to1() {
  for (let i = 20; i >= 1; i--) {
    console.log(i);
  }
}

printReverse20to1();

function sum1to100() {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sum1to100());

function createArray10to30() {
  let array = [];

  for (let i = 0; i <= 20; i++) {
    array[i] = i + 10;
  }

  return array;
}

let new_arr = createArray10to30();

function printArrayItems(arr) {
  for (let i = 0; i < new_arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayItems(new_arr);

function countPositives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }

  return count;
}

function printSquares1to20() {
  for (let i = 1; i <= 20; i++) {
    console.log(i * i);
  }
}

printSquares1to20();

function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}
