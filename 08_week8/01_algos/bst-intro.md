# Introduction to Binary Search Trees (BSTs)

## What is a Binary Search Tree?

A **Binary Search Tree (BST)** is a type of data structure that organizes data in a hierarchical way.
Each **node** in the tree can have at most two children:

- The **left child** contains values _less than_ the parent’s value.
- The **right child** contains values _greater than_ the parent’s value.

This ordering makes searching, inserting, and deleting elements more efficient than in an unsorted list.

---

## Why Use a BST?

- **Efficient Searching:** Finding whether a value exists can be done in _O(log n)_ time (in a balanced tree).
- **Efficient Insertion/Deletion:** New values can be inserted or removed while maintaining order.
- **Sorted Traversals:** In-order traversal of a BST gives the values in ascending order.

---

## Terminology

Before diving deeper, here are some important terms related to Binary Search Trees:

- **Root**: The topmost node of the tree.
- **Child**: A node directly connected to another node when moving downward.
- **Parent**: A node that has child nodes.
- **Leaf**: A node with no children.
- **Subtree**: A tree formed by a node and all its descendants.
- **Height**: The length of the longest path from the root to a leaf.
- **Depth**: The distance from the root to a given node.

---

## BST Node Structure

A BST is built from **nodes**.
Each node typically stores:

- A **value** (the data).
- A **reference to the left child** (smaller values).
- A **reference to the right child** (larger values).

Example in pseudocode:

```js
class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null; // smaller values
    this.right = null; // larger values
  }
}
```

---

## Basic Operations

### 1. Insertion

- Start at the root.
- If the new value is smaller, go left; if larger, go right.
- Repeat until you find a null spot to insert the new node.

### 2. Searching

- Start at the root.
- If the value matches, return it.
- If smaller, search the left child; if larger, search the right child.

### 3. Traversals

Common ways to visit all nodes:

- **In-order (L → Root → R):** Produces sorted values.
- **Pre-order (Root → L → R):** Useful for copying the tree.
- **Post-order (L → R → Root):** Useful for deleting the tree.

---

## Recursion and BSTs

Binary Search Trees are naturally suited for **recursive operations**. Each node is itself the root of a smaller subtree, which makes problems easy to break down into smaller, self-similar tasks.

For example:

- **Searching:** Check the current node, then recursively search the left or right subtree.
- **Insertion:** Compare the new value, then recursively call insert on the left or right child.
- **Traversals:** Each traversal algorithm (in-order, pre-order, post-order) can be written concisely with recursion.

This recursive structure is one of the reasons BSTs are so elegant to implement and understand.

---

## Example Tree

```
        8
       / \
      3   10
     / \     \
    1   6     14
       / \    /
      4   7  13
```

- Values less than 8 go to the left.
- Values greater than 8 go to the right.

---

## Limitations of BSTs

- **Unbalanced Trees:** If values are inserted in sorted order, the tree can become skewed (like a linked list), degrading performance to _O(n)_.
- **Balance Matters:** Self-balancing trees (like AVL or Red-Black Trees) are used in practice to maintain efficiency.

---

## Key Takeaways

- A BST organizes values with the rule: _Left < Parent < Right_.
- Searching, inserting, and deleting are efficient in a balanced BST.
- Traversals allow us to access nodes in different useful orders.
- Maintaining balance is crucial for performance.
