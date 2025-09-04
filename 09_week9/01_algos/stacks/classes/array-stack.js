import { NotImplementedError } from './not-implemented-error.js';

/**
 * ArrayStack is a stack (LIFO: Last-In, First-Out) data structure backed by a JavaScript array.
 * The top of the stack is at the end of the array.
 */
class ArrayStack {
  /**
   * Creates a new, empty stack.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack has no elements, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Adds a value to the top of the stack.
   * @param {*} val - The value to push onto the stack.
   * @returns {ArrayStack} The stack instance (for chaining).
   */
  push(val) {
    this.items.push(val);
    return this;
  }

  /**
   * Removes and returns the value at the top of the stack.
   * @returns {*} The value removed from the top, or null if the stack is empty.
   */
  pop() {
    return this.items.pop() ?? null;
  }

  /**
   * Returns the value at the top of the stack without removing it.
   * @returns {*} The value at the top, or null if the stack is empty.
   */
  peek() {
    return this.items[this.items.length - 1] ?? null;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} The size of the stack.
   */
  size() {
    return this.items.length;
  }

  /**
   * Removes all elements from the stack.
   * @returns {ArrayStack} The stack instance (for chaining).
   */
  clear() {
    // for(let i = 0; i < this.items.length; i++){
      
    // }
    this.items = []

    return this;
  }

  /**
   * Returns an array of the stack's elements, with the top element first.
   * @returns {Array} An array representing the stack from top to bottom.
   */
  toArray() {
    var array1 = new Array();

    array1.push(...this.items);

    return array1.reverse();
  }

  /**
   * Prints the stack from top to bottom to the console.
   * Each element is printed on its own line.
   * @returns {ArrayStack} The stack instance (for chaining).
   */
  print() {
    const copyArr = [...this.items]
    for (const element of copyArr.reverse()) {
      console.log(element);
    }
    return this;
  }
}

export { ArrayStack };
