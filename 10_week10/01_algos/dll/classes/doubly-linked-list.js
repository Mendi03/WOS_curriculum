/**
 * Represents a node in a doubly linked list.
 * @class
 */
class DLLNode {
  /**
   * Creates a DLLNode.
   * @param {*} val - The value to store in the node.
   */
  constructor(val) {
    /** @type {*} */
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
   * @param {*} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAtHead(val) {
    const newNode = new DLLNode(val);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Inserts a new node with the given value at the tail of the list.
   * @param {*} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAtTail(val) {
    const newNode = new DLLNode(val);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Removes and returns the value at the head of the list.
   * @returns {*} The value removed, or null if the list is empty.
   * @complexity O(1)
   */
  removeHead() {
    if (this.isEmpty()) return null;
    const removedValue = this.head.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return removedValue;
  }

  /**
   * Removes and returns the value at the tail of the list.
   * @returns {*} The value removed, or null if the list is empty.
   * @complexity O(1)
   */
  removeTail() {
    if (this.isEmpty()) return null;
    const removedValue = this.tail.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return removedValue;
  }

  /**
   * Finds the first node with the specified value.
   * @param {*} val - The value to search for.
   * @returns {DLLNode|null} The found node, or null if not found.
   * @complexity O(n)
   */
  find(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  /**
   * Inserts a new node with the given value before the specified node.
   * @param {DLLNode} node - The node before which to insert.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertBefore(node, val) {
    if (!node) return;
    const newNode = new DLLNode(val);

    if (node === this.head) {
      newNode.next = node;
      node.prev = newNode;
      this.head = newNode;
      this.length++;
      return;
    }

    const prev = node.prev;
    if (prev) prev.next = newNode;
    newNode.prev = prev;
    newNode.next = node;
    node.prev = newNode;
    this.length++;
  }

  /**
   * Inserts a new node with the given value after the specified node.
   * @param {DLLNode} node - The node after which to insert.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAfter(node, val) {
    if (!node) return;
    const newNode = new DLLNode(val);

    if (node === this.tail) {
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;
      this.length++;
      return;
    }

    const next = node.next;
    newNode.next = next;
    newNode.prev = node;
    node.next = newNode;
    if (next) next.prev = newNode;
    this.length++;
  }

  /**
   * Removes the first node with the specified value from the list.
   * @param {any} val - The value to remove.
   * @returns {boolean} True if a node was removed; otherwise, false.
   * @complexity O(n)
   */
  remove(val) {
    // TODO:
    // 1. Find the node containing the given value.
    let runner = this.head;

    while (runner) {
      if (runner.value == val) {
        break;
      }
      runner = runner.next;
    }
    // 2. If not found, return false.
    if(!runner) return false;
    // 3. If the node is the only node (head and tail), clear head and tail.
    // 4. If the node is the head, update head and fix links.
    if(this.head == runner){
      if(runner == this.tail){
        this.tail = this.head = null;
      }
      else{
        this.head = runner.next;
        this.head.prev = null;
      }
    }
    // 5. If the node is the tail, update tail and fix links.
    else if (this.tail == runner) {
      this.tail = runner.prev;
      this.tail.next = null;
    }
    // 6. Otherwise, unlink the node from its previous and next nodes.
    else{
      runner.prev.next = runner.next;
      runner.next.prev = runner.prev;
      runner = null;
    }
    // 7. Decrement length and return true.
    this.length--;
    return true;
    
  }

  /**
   * Reverses the order of the nodes in the list in-place.
   * @returns {void}
   * @complexity O(n)
   */
  reverse2() {
    // TODO:
    // 1. If the list is empty or has one node, do nothing.
    if(!this.length) return;
    // 2. Iterate through each node, swapping its prev and next pointers.
    let start = this.head
    let end = this.tail

    let temp;

    while (start != end) {
      temp = start.value;
      start.value = end.value;
      end.value = temp;

      if(start.next == end) return;

      start = start.next;
      end = end.prev;
    }
    // 3. After iteration, swap the head and tail references.
    return;

  }

  /**
   * Reverses the order of the nodes in the list in-place.
   * @returns {void}
   * @complexity O(n)
   */
  reverse() {
    // TODO:
    // 1. If the list is empty or has one node, do nothing.
    if(!this.length || this.length == 1) return;
    // 2. Iterate through each node, swapping its prev and next pointers.
    let runner = this.head;
    let next;
    // let nextPointer;

    while (runner) {
      next = runner.next;
      // nextPointer = runner.next;
      runner.next = runner.prev;
      runner.prev = next;
      runner = next;
    }
    // 3. After iteration, swap the head and tail references.
    next = this.head;
    this.head = this.tail;
    this.tail = next;
  }

  /**
   * Converts the list to an array of values.
   * @returns {Array<*>} An array containing all values in the list.
   * @complexity O(n)
   */
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

}

export { DoublyLinkedList };
