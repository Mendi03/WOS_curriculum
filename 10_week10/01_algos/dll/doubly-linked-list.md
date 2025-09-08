# Introduction to Doubly Linked Lists

## Overview

A **Doubly Linked List (DLL)** is a type of linked data structure that consists of nodes, where each node contains a value and two pointers: one pointing to the next node and another pointing to the previous node. This allows traversal in both directions — forward and backward.

In contrast, a **Singly Linked List** only has one pointer per node, which points to the next node, allowing traversal in only one direction.

## Structure

Each node in a doubly linked list typically has three parts:

- **Value:** The data stored in the node.
- **Prev:** A pointer/reference to the previous node in the list.
- **Next:** A pointer/reference to the next node in the list.

```
[Prev] <--> [Value] <--> [Next]
```

## Operations

Common operations you can perform on a doubly linked list include:

- **Insert at Head:** Add a new node at the beginning of the list.
- **Insert at Tail:** Add a new node at the end of the list.
- **Remove Head:** Remove the first node in the list.
- **Remove Tail:** Remove the last node in the list.
- **Find:** Search for a node with a specific value.

Because each node has a reference to its previous node, these operations can be more efficient compared to singly linked lists, especially when removing nodes from the tail.

## Comparison with Singly Linked Lists

| Feature               | Doubly Linked List            | Singly Linked List                |
| --------------------- | ----------------------------- | --------------------------------- |
| Traversal             | Forward and backward          | Forward only                      |
| Memory usage          | More (extra pointer for prev) | Less                              |
| Insert/Delete at Tail | Efficient                     | Less efficient (need to traverse) |
| Complexity            | Slightly more complex         | Simpler                           |

## Visual Diagram

```
Head <-> Node1 <-> Node2 <-> Node3 <-> Tail
NULL  <-> [ ]  <-> [ ]  <-> [ ]  <-> NULL
```

Each arrow represents a pointer linking nodes in both directions.

## Common Use Cases

- Navigating back and forth in browsers (back and forward buttons).
- Implementing undo/redo functionality.
- Managing playlists or image viewers where you can move both forward and backward.
- Any scenario where bidirectional traversal is beneficial.

## Key Takeaways

- Doubly linked lists allow traversal in both directions.
- Each node contains pointers to both the previous and next nodes.
- They use more memory than singly linked lists but offer more flexibility.
- Useful when you need efficient insertions and deletions from both ends or bidirectional navigation.
