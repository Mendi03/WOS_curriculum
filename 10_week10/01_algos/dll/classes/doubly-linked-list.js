/**
 * Represents a node in a doubly linked list.
 * @class
 */
class DLLNode {
  /**
   * Creates a DLLNode.
   * @param {any} val - The value to store in the node.
   */
  constructor(val) {
    /** @type {any} */
    this.value = val;
    /** @type {DLLNode|null} */
    this.prev = null;
    /** @type {DLLNode|null} */
    this.next = null;
  }
}

/**
 * Doubly Linked List implementation.
 * @class
 */
class DoublyLinkedList {
  /**
   * Creates an empty doubly linked list.
   */
  constructor() {
    /** @type {DLLNode|null} */
    this.head = null;
    /** @type {DLLNode|null} */
    this.tail = null;
    /** @type {number} */
    this.length = 0;
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} True if the list has no elements; otherwise, false.
   * @complexity O(1)
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns the number of elements in the list.
   * @returns {number} The size of the list.
   * @complexity O(1)
   */
  size() {
    return this.length;
  }

  /**
   * Inserts a new node with the given value at the head of the list.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAtHead(val) {
    // no nodes
    // 1+ nodes
    const newNode = new DLLNode(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // point new node at head
      // move head to new node
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Removes and returns the value at the head of the list.
   * @returns {any} The value removed, or null if the list is empty.
   * @complexity O(1)
   */
  removeHead() {
    // no nodes
    // 1 node
    // set head and tail to null return value
    // 2 nodes
    // move pointer forward to next node
    // set currentnode.next to null
    if (this.isEmpty()) return null;
    const currentVal = this.head.value;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      const currentNode = this.head;
      // (head) currentNode => <= node
      this.head = this.head.next;
      // currentNode => <= (head) node
      this.head.prev = null;
      // currentNode => (head) node
      currentNode.next = null;
      // currentNode X (head) node
    }
    this.length--;
    return currentVal;
  }

  /**
   * Converts the list to an array of values.
   * @returns {Array<*>} An array containing all values in the list.
   * @complexity O(n)
   */
  toArray() {
    let runner = this.head;
    const retArr = [];
    while (runner) {
      retArr.push(runner.value);
      runner = runner.next;
    }
    return retArr;
  }
}

export { DoublyLinkedList };
