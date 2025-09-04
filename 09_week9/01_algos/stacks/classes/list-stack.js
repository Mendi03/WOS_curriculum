/**
 * Node used internally by LinkedListStack to store values.
 */
class StackNode {
  /**
   * @param {*} value - The value to store in the stack node.
   */
  constructor(value) {
    this.value = value;
    /** @type {StackNode|null} */
    this.next = null;
  }
}

/**
 * Stack implementation using a singly linked list.
 * Top of stack is the head node for O(1) push/pop/peek.
 */
class LinkedListStack {
  constructor() {
    /** @type {StackNode|null} */
    this.head = null;
    /** @type {number} */
    this._size = 0;
  }

  /**
   * Checks whether the stack is empty.
   * @returns {boolean} True if stack has no elements, false otherwise.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Pushes a value onto the top of the stack.
   * @param {*} val - The value to push.
   * @returns {LinkedListStack} The stack instance for chaining.
   */
  push(val) {
    const node = new StackNode(val);
    node.next = this.head;
    this.head = node;
    this._size++;
    return this;
  }

  /**
   * Removes and returns the value at the top of the stack.
   * @returns {*|null} The popped value, or null if stack is empty.
   */
  pop() {
    if (this.isEmpty()) return null;
    const val = this.head.value;
    this.head = this.head.next;
    this._size--;
    return val;
  }

  /**
   * Returns the value at the top of the stack without removing it.
   * @returns {*|null} The value at the top, or null if stack is empty.
   */
  peek() {
    return this.isEmpty() ? null : this.head.value;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} The size of the stack.
   */
  size() {
    return this._size;
  }

  /**
   * Removes all elements from the stack.
   * @returns {LinkedListStack} The stack instance for chaining.
   */
  clear() {
    this.head = null;
    this._size = 0;
    return this;
  }

  /**
   * Converts the stack into an array (top element is first).
   * @returns {Array<*>} An array representation of the stack.
   */
  toArray() {
    const arr = [];
    let runner = this.head;
    while (runner) {
      arr.push(runner.value);
      runner = runner.next;
    }
    return arr;
  }

  /**
   * Prints the stack contents to the console (top to bottom).
   * @returns {LinkedListStack} The stack instance for chaining.
   */
  print() {
    if (this.isEmpty()) {
      console.log('(empty)');
      return this;
    }
    console.log(this.toArray().join(' → ') + ' → null');
    return this;
  }
}

export { LinkedListStack };
