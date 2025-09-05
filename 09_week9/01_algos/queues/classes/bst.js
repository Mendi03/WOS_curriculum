/** @typedef {import('./bst-node.js').BSTNode} BSTNode */

import { BSTNode } from './bst-node.js';
import { LinkedListQueue } from './linked-list-queue.js';

/**
 * Represents a Binary Search Tree (BST).
 * The BST stores nodes in an ordered structure where all values in the left subtree
 * are less than the parent node and all values in the right subtree are greater.
 */
class BinarySearchTree {
  /**
   * Creates a new empty Binary Search Tree.
   * @property {BSTNode|null} root - The root node of the tree. Initially null.
   */
  constructor() {
    this.root = null;
  }

  /**
   * Recursively inserts a value into the BST while maintaining the BST invariant.
   *
   * Duplicate policy: If the value is already present in the tree, this method
   * will ignore the insertion (no duplicates are stored).
   * @param {number} value - The value to insert.
   * @returns {void}
   */
  insert(value) {
    // Delegate to recursive helper that returns the (possibly new) subtree root.
    this.root = this.#insertRec(this.root, value);
  }

  /**
   * Recursive insert helper.
   * @param {BSTNode|null} node
   * @param {number} value
   * @returns {BSTNode} The updated subtree root.
   */
  #insertRec(node, value) {
    if (node === null) {
      return new BSTNode(value);
    }
    // Otherwise compare and assign: node.left = #insertRec(node.left, value)
    if (value < node.value) {
      node.left = this.#insertRec(node.left, value);
    }
    // or node.right = #insertRec(node.right, value).
    if (value > node.value) {
      node.right = this.#insertRec(node.right, value);
    }
    return node;
  }

  /**
   * Determines whether the BST contains a target value.
   * @param {number} value - The value to search for.
   * @returns {boolean} True if found, otherwise false.
   */
  contains(value) {
    return this.#containsRec(this.root, value);
  }

  /**
   * Recursive search helper.
   * @param {BSTNode|null} node
   * @param {number} value
   * @returns {boolean}
   */
  #containsRec(node, value) {
    if (node === null) return false;
    if (value === node.value) return true;
    return value < node.value
      ? this.#containsRec(node.left, value)
      : this.#containsRec(node.right, value);
  }

  /**
   * Performs a level-order (breadth-first) traversal of the BST using a queue.
   * Visits nodes from top to bottom, left to right across each level.
   *
   * @returns {number[]} An array of node values in level-order.
   */
   levelOrder() {
    // level-order traversal with queue
    const results = [];
    // 1. If root is null, return empty array.
    if (this.root === null) return [];
    // 2. Create a queue and enqueue the root.
    const queue = new LinkedListQueue();
    queue.enqueue(this.root);
    // 3. While the queue is not empty:
    while (!queue.isEmpty()) {
      //    a. Dequeue the next node.
      const curr = queue.dequeue();
      //    b. Add its value to the results array.
      results.push(curr.value);
      //    c. If the node has a left child, enqueue it.
      if (curr.left) queue.enqueue(curr.left);
      //    d. If the node has a right child, enqueue it.
      if (curr.right) queue.enqueue(curr.right);
    }
    // 4. Return the results array.
    return results;
  }

  /**
   * Prints the tree sideways in the console, with the root on the left and deeper
   * levels extending to the right.
   *
   * Example output:
   *  │           ┌── 10
   *  │       ┌── 9
   *  │       │   └── 8
   *  │   ┌── 7
   *  │   │   └── 6
   *  └── 5
   *      │   ┌── 4
   *      └── 3
   *          │   ┌── 2
   *          └── 1
   *              └── 0
   *
   * @param {BSTNode|null} node - The node to start printing from (defaults to root).
   * @param {string} prefix - String used internally for spacing/branching.
   * @param {boolean} isLeft - Whether this node is a left child (affects branch symbol).
   * @returns {void}
   */
  prettyPrint = (node = this.root, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };
}

export { BinarySearchTree };
