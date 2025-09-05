class QueueNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

/**
 * A queue data structure implemented using a singly-linked list.
 * Supports typical queue operations: enqueue, dequeue, peek, isEmpty, and size.
 */
class LinkedListQueue {
  /**
   * Creates a new empty LinkedListQueue.
   */
  constructor() {
    /** @type {QueueNode|null} */
    this.front = null;
    /** @type {QueueNode|null} */
    this.back = null;
    this._size = 0;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty() {
    // Return true if the queue is empty, false otherwise.
    return this.front === null;
  }

  /**
   * Adds a value to the rear of the queue.
   * @param {any} val - The value to enqueue.
   * @returns {LinkedListQueue} The queue instance for chaining.
   */
  enqueue(val) {
    // Add a value to the rear of the queue and return the queue instance.
    const newNode = new QueueNode(val);
    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this._size++;
    return this;
  }

  /**
   * Removes and returns the value at the front of the queue.
   * @returns {any} The value removed from the front of the queue.
   */
  dequeue() {
    // Remove and return the value at the front of the queue.
    if (this.isEmpty()) return undefined;
    const val = this.front.value;
    this.front = this.front.next;
    this._size--;
    return val;
  }

  /**
   * Returns the value at the front of the queue without removing it.
   * @returns {any} The value at the front of the queue.
   */
  peek() {
    // Return the value at the front of the queue without removing it.
    return this.isEmpty() ? undefined : this.front.value;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns {number} The size of the queue.
   */
  size() {
    // Return the number of elements in the queue.
    return this._size;
  }
}

export { LinkedListQueue };
