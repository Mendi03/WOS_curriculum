function factorialIterative(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n < 0) {
    console.log('Factorial is not defined for negative numbers.');
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorialIterative(5));

function factorial(n) {
  // Base Case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive Case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(3));

