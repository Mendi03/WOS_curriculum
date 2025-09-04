/**
 * A queue data structure implemented using a JavaScript array.
 * Supports typical queue operations: enqueue, dequeue, peek, isEmpty, and size.
 */
class ArrayQueue {
  /**
   * Creates a new empty ArrayQueue.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Adds a value to the rear of the queue.
   * @param {any} val - The value to enqueue.
   * @returns {ArrayQueue} The queue instance for chaining.
   */
  enqueue(val) {
    this.items.push(val)
    return this;
  }

  /**
   * Removes and returns the value at the front of the queue.
   * @returns {any} The value removed from the front of the queue.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Returns the value at the front of the queue without removing it.
   * @returns {any} The value at the front of the queue.
   */
  peek() {
    return this.items[0];
  }

  /**
   * Returns the number of elements in the queue.
   * @returns {number} The size of the queue.
   */
  size() {
    return this.items.length;
  }
}

export { ArrayQueue };
