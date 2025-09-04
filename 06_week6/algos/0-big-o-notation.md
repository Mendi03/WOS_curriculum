# Big O Notation: Understanding Algorithm Efficiency in JavaScript

---

## 1. Introduction: Why Big O is Important

When writing algorithms, especially in JavaScript, understanding **how efficient** your code is can make a huge difference. Big O Notation helps us describe the **performance** or **complexity** of an algorithm as the input size grows. It tells us how the runtime or space requirements grow, so we can choose the best approach for our problem.

---

## 2. Learning Goals

By the end of this lesson, you will be able to:

- Explain what Big O Notation means and why it matters.
- Identify common Big O complexities.
- Analyze simple JavaScript algorithms for time and space complexity.
- Compare sorting algorithms using Big O.
- Write basic code snippets and measure operations like comparisons and swaps.

---

## 3. TL;DR Cheat Sheet of Complexities

| Complexity     | Meaning           | Example Scenario               |
| -------------- | ----------------- | ------------------------------ |
| **O(1)**       | Constant time     | Accessing an array element     |
| **O(log n)**   | Logarithmic time  | Binary search                  |
| **O(n)**       | Linear time       | Looping through an array       |
| **O(n log n)** | Linearithmic time | Efficient sorting (Merge Sort) |
| **O(n²)**      | Quadratic time    | Nested loops (Bubble Sort)     |
| **O(2^n)**     | Exponential time  | Recursive Fibonacci            |

---

## 4. Core Concepts

- **Input Size (n):** The amount of data your algorithm processes.
- **Counting Work:** Focus on the number of key operations (comparisons, swaps).
- **Ignoring Constants:** Big O drops constants and lower terms (e.g., 3n² + 5n → O(n²)).
- **Best, Average, Worst Cases:** Different inputs can affect runtime.
- **Space Complexity:** How much memory your algorithm uses.

---

## 5. Pattern-to-Big-O Quick Guide

| Pattern                            | Big O Complexity | Example                   |
| ---------------------------------- | ---------------- | ------------------------- |
| Single loop over n elements        | O(n)             | `for (let i=0; i<n; i++)` |
| Nested loops over n elements       | O(n²)            | Two nested `for` loops    |
| Dividing problem in half each time | O(log n)         | Binary search             |
| Recursive divide-and-conquer       | O(n log n)       | Merge Sort, Quick Sort    |

---

## 6. Sorting Case Studies

| Algorithm          | Best Case  | Average Case | Worst Case | Space    | Stable? | Notes                            | JS Pseudocode Snippet                      |
| ------------------ | ---------- | ------------ | ---------- | -------- | ------- | -------------------------------- | ------------------------------------------ |
| **Bubble Sort**    | O(n)       | O(n²)        | O(n²)      | O(1)     | Yes     | Simple, but slow on large arrays | `for i... for j... swap if needed`         |
| **Selection Sort** | O(n²)      | O(n²)        | O(n²)      | O(1)     | No      | Always does n² comparisons       | `for i... find min, swap`                  |
| **Insertion Sort** | O(n)       | O(n²)        | O(n²)      | O(1)     | Yes     | Efficient for nearly sorted data | `for i... insert current into sorted part` |
| **Merge Sort**     | O(n log n) | O(n log n)   | O(n log n) | O(n)     | Yes     | Uses extra space, stable, fast   | `divide array, merge sorted halves`        |
| **Quick Sort**     | O(n log n) | O(n log n)   | O(n²)      | O(log n) | No      | Fast in practice, but unstable   | `partition, recursively sort subarrays`    |

---

## 7. Summary Table for the Five Algorithms

| Algorithm      | Time Complexity (Avg) | Space Complexity | Stable | Notes                         |
| -------------- | --------------------- | ---------------- | ------ | ----------------------------- |
| Bubble Sort    | O(n²)                 | O(1)             | Yes    | Simple, inefficient           |
| Selection Sort | O(n²)                 | O(1)             | No     | Minimal swaps                 |
| Insertion Sort | O(n²)                 | O(1)             | Yes    | Good for small or sorted data |
| Merge Sort     | O(n log n)            | O(n)             | Yes    | Consistent performance        |
| Quick Sort     | O(n log n)            | O(log n)         | No     | Fast but worst case slow      |

---

## 8. Back-of-the-Envelope Comparisons

| Input Size (n) | n (linear) | n log n (linearithmic) | n² (quadratic) |
| -------------- | ---------- | ---------------------- | -------------- |
| 10             | 10         | ~33                    | 100            |
| 100            | 100        | ~664                   | 10,000         |
| 1,000          | 1,000      | ~9,966                 | 1,000,000      |
| 10,000         | 10,000     | ~132,877               | 100,000,000    |

Notice how n² grows much faster than n or n log n!

---

## 9. Mini-Lab: Measuring Comparisons and Swaps in JavaScript

Try this small experiment to count operations in Bubble Sort:

```js
function bubbleSort(arr) {
  let comparisons = 0;
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        swaps++;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return { sorted: arr, comparisons, swaps };
}

const result = bubbleSort([5, 3, 8, 4, 2]);
console.log(result);
```

---

## 10. Quick Practice Questions

1. What is the time complexity of accessing an element in an array?
2. Which sorting algorithm is stable and uses O(n log n) time?
3. Why do we ignore constants in Big O notation?
4. What is the worst-case time complexity of Quick Sort?
5. How does space complexity differ between Merge Sort and Quick Sort?

---

## 11. Exit Ticket (5 Questions)

1. Define Big O Notation in your own words.
2. What does it mean if an algorithm is O(1)?
3. Give an example of an O(n²) operation in JavaScript.
4. Which sorting algorithm is best for nearly sorted data?
5. How does input size affect algorithm performance?

---

## 12. Common Pitfalls

- Confusing best case with worst case complexity.
- Forgetting that Big O ignores constants and lower order terms.
- Assuming faster algorithms are always better without considering space or stability.
- Mixing up stable and unstable sorting algorithms.
- Not testing algorithms with different input sizes.

---

## 13. Glossary + Further Reading

- **Big O Notation:** A way to describe the upper bound of an algorithm’s runtime or space.
- **Stable Sorting:** Maintains the relative order of equal elements.
- **Space Complexity:** The amount of memory an algorithm uses.
- **Divide and Conquer:** Breaking a problem into smaller subproblems.

### Further Reading

- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
- [MDN Web Docs: Algorithm Complexity](https://developer.mozilla.org/en-US/docs/Glossary/Algorithm)
- [Sorting Algorithms Visualization](https://visualgo.net/en/sorting)

---

Happy coding and analyzing your algorithms! 🚀
