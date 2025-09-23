# Introduction to Heaps

A **heap** is a specialized tree-based data structure that satisfies the heap property. In a **min-heap**, for any given node \(i\), the value of \(i\) is less than or equal to the values of its children, ensuring the smallest element is always at the root. Conversely, in a **max-heap**, the value of \(i\) is greater than or equal to the values of its children, placing the largest element at the root.

## Array-backed Binary Heap Representation

Heaps are commonly implemented using arrays rather than pointers. This is possible because heaps are complete binary trees, meaning all levels are fully filled except possibly the last, which is filled from left to right.

This class will favor the **1-based indexing approach**, where the array starts at index 1 and index 0 is unused. Given a node at index \(i\) (1-based indexing):

- The left child is at index \(2i\)
- The right child is at index \(2i + 1\)
- The parent is at index \(\lfloor i / 2 \rfloor\)

This indexing scheme allows efficient traversal and manipulation without explicit tree nodes.

### Alternative: 0-based Indexing

While this class uses 1-based indexing, heaps can also be implemented using 0-based indexing (common in languages like JavaScript). In that case:

- The left child of node \(i\) is at index \(2i + 1\)
- The right child of node \(i\) is at index \(2i + 2\)
- The parent of node \(i\) is at index \(\lfloor (i - 1) / 2 \rfloor\)

Both approaches work correctly, but the index calculations differ slightly depending on the chosen convention.

## Why Are Heaps Useful?

Heaps are fundamental in many algorithms and systems because they provide quick access to the minimum or maximum element:

- **Priority Queues:** Heaps efficiently implement priority queues, where elements with the highest priority are processed first.
- **Scheduling:** Operating systems use heaps to manage tasks based on priority and execution time.
- **Graph Algorithms:** Algorithms like Dijkstra’s shortest path and Prim’s minimum spanning tree rely on heaps to select the next optimal edge or vertex efficiently.

## Core Operations

- **Insert:** Add a new element to the heap, then "bubble up" to restore the heap property.
- **Peek:** Return the root element (minimum or maximum) without removing it.
- **ExtractMin/ExtractMax:** Remove and return the root element, then "bubble down" to restore the heap property.
- **Heapify:** Convert an unordered array into a heap by adjusting elements from the bottom up.

## Visual Example

Consider the array representation of a min-heap using 1-based indexing (with a placeholder at index 0):

```
Array: [null, 10, 15, 30, 40, 50, 100, 40]

Tree:
         10
       /    \
     15      30
    /  \    /  \
  40   50 100  40
```

- Index 1 (10) is the root.
- Left child of index 1 is index 2 (15).
- Right child of index 1 is index 3 (30).
- And so on...

## Key Takeaways

- Heaps maintain a partial order that allows constant-time access to the minimum or maximum element.
- They are efficiently implemented using arrays with simple index calculations.
- Heaps are essential for priority queues and many algorithmic applications.
- Core operations include insertion, extraction, peeking, and heap construction (heapify).

Understanding heaps is fundamental for efficient data handling in priority-based contexts.
