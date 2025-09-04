/**
 * Represents a single node in a Binary Search Tree (BST).
 * Each node stores a value and has references to its left and right child nodes.
 */
class BSTNode {
  /**
   * Creates a new BST node.
   * @param {any} value - The value to store in this node.
   * @property {any} value - The value held by the node.
   * @property {BSTNode|null} left - Reference to the left child node (values less than this node).
   * @property {BSTNode|null} right - Reference to the right child node (values greater than this node).
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export { BSTNode };
