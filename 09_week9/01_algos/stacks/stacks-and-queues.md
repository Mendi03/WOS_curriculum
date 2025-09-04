# Introduction to Stacks and Queues

## Overview

In computer science, **stacks** and **queues** are fundamental data structures used to store and organize data efficiently. Understanding these structures is essential for solving many programming problems and designing algorithms. This guide introduces stacks and queues, explains their characteristics, and highlights their uses.

---

## Stacks

### Definition

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means the last element added to the stack is the first one to be removed.

### Real-life Analogies

- A stack of plates: You add plates on top, and when you need one, you take the top plate first.
- A pile of books: You place books on top, and you remove the top book first.

### Basic Operations

- **Push**: Add an element to the top of the stack.
- **Pop**: Remove the element from the top of the stack.
- **Peek/Top**: View the element at the top without removing it.
- **IsEmpty**: Check if the stack is empty.

### Time Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | O(1)            |
| Pop       | O(1)            |
| Peek      | O(1)            |

---

## Queues

### Definition

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means the first element added to the queue is the first one to be removed.

### Real-life Analogies

- A line at a grocery store checkout: The first person to get in line is the first to be served.
- A printer queue: Documents are printed in the order they were sent.

### Basic Operations

- **Enqueue**: Add an element to the end of the queue.
- **Dequeue**: Remove the element from the front of the queue.
- **Front/Peek**: View the element at the front without removing it.
- **IsEmpty**: Check if the queue is empty.

### Time Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | O(1)            |
| Dequeue   | O(1)            |
| Peek      | O(1)            |

---

## Comparison Table: Stacks vs Queues

| Feature           | Stack                     | Queue                         |
| ----------------- | ------------------------- | ----------------------------- |
| Principle         | Last In, First Out (LIFO) | First In, First Out (FIFO)    |
| Insertion Point   | Top                       | Rear/End                      |
| Removal Point     | Top                       | Front                         |
| Real-life Example | Stack of plates/books     | Line at a store/printer queue |
| Common Operations | Push, Pop, Peek           | Enqueue, Dequeue, Peek        |

---

## Applications

### Stacks

- Expression evaluation and syntax parsing (e.g., matching parentheses)
- Undo mechanisms in text editors
- Backtracking algorithms (e.g., maze solving)
- Function call management (call stack)

### Queues

- Task scheduling (e.g., CPU scheduling)
- Handling requests in web servers
- Breadth-first search (BFS) in graphs
- Print job management

---

## Key Takeaways

- **Stacks** operate on a LIFO basis, where the last element added is the first removed.
- **Queues** operate on a FIFO basis, where the first element added is the first removed.
- Both data structures have efficient operations with constant time complexity for insertion and removal.
- Understanding when to use stacks or queues is crucial for designing effective algorithms and solving real-world problems.
