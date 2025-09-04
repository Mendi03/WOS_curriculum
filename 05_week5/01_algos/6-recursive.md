# Introduction to Recursive Functions

Recursion is a programming technique where a function calls itself in order to solve a problem. This can be a powerful tool for solving problems that have a natural hierarchical or repetitive structure, such as computing factorials, traversing trees, or generating sequences.

A recursive function requires the following components to operate correctly:

1. **Base Case:** :
   This is the stopping condition for the recursion. It defines the simplest instance of the problem that can be solved directly, without further recursive calls. Without a base case, a recursive function would enter an infinite loop, leading to a stack overflow.
2. **Recursive Case:**
   This part of the function handles the more complex instances of the problem. It breaks down the problem into one or more smaller, similar subproblems and calls the function itself (recursively) to solve these subproblems.
3. **State Change Toward the Base Case:**
   Each recursive call must modify the input or state in a way that brings it closer to the base case. This ensures that the recursion eventually converges and reaches the stopping condition, preventing infinite loops.
4. **Self-Call:**
   The function must call itself within its own definition to achieve recursion. This is the fundamental characteristic that defines a recursive function.

Recursion can often lead to elegant and concise solutions, but it’s important to understand how it works and to use it appropriately. In this lesson, you'll learn how to recognize when recursion is a good fit, how to write recursive functions in JavaScript, and how to trace their behavior.

Let's start with a classic example: calculating the factorial of a number.

```js
function factorial(n) {
  // Base Case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive Case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5)); // Output: 120
```

In this example:

- The base case is when `n` is 0 or 1 — the function returns 1 and stops recurring.
- The recursive case multiplies `n` by `factorial(n - 1)`, reducing the problem size with each call.
- Eventually, the input shrinks to the base case, and the recursion "unwinds," returning the result up the call stack.

## Iterative Version

```js
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
```

### Comparing Recursive and Iterative Approaches

Both recursive and iterative versions of the factorial function solve the same problem, but they do so in different ways:

- The **recursive version** is more concise and expresses the problem in a self-referential manner. It mirrors the mathematical definition of factorial and is often easier to reason about conceptually. However, it comes with the cost of additional function call overhead and a risk of stack overflow for large inputs.
- The **iterative version** uses a loop to accumulate the result and avoids the overhead of recursive function calls. It is generally more efficient and safer for large values of `n`, especially in languages like JavaScript that do not optimize tail recursion.

In general, recursion can lead to cleaner code for problems that naturally break down into subproblems (like tree traversal), while iteration may be preferable for problems with a simple, linear structure.
