/**
 * MinHeap implementation (array-backed).
 *
 * Day 1 scope:
 * - constructor
 * - insert
 * - peek
 */
class MinHeap {
  /**
   * Creates a new empty MinHeap.
   */
  constructor() {
    // TODO: Initialize the heap array using 1-based indexing
    // Example: this.data = [null]
    this.data = [null]
  }

  /**
   * Returns the minimum element without removing it.
   * @returns {number|undefined} The smallest element or undefined if empty.
   */
  peek() {
    // TODO: Return the element at index 1 if it exists (1-based indexing)
    // 1. If the heap array length <= 1, return undefined
    return this.data.length <= 1 ? undefined : this.data[1];
    // 2. Otherwise, return the element at index 1
  }

  /**
   * Inserts a new value into the heap and maintains the heap property.
   * @param {number} value
   * @returns {void}
   */
  insert(value) {
    // TODO: Insert value into the heap using 1-based indexing
    // 1. Push the new value onto the end of the array
    this.data.push(value);
    // 2. Call the bubbleUp helper method with the index of the new value (last index)
    this.#bubbleUp(this.data.length - 1);
  }

  /**
   * Moves the element at the given index up until the heap property is restored.
   * @param {number} index
   * @private
   */
  #bubbleUp(index) {
    // TODO: Restore the heap property by moving the value at index upward (1-based indexing)
    // 1. While index > 1:
    while (index > 1) {
      //    a. Find the parent index using Math.floor(index / 2)
      let parentIndex = Math.floor(index / 2);
      //    b. If the parent value is less than or equal to the current value, stop
      if (this.data[parentIndex] <= this.data[index]) break;
      //    c. Otherwise, swap the parent and current values
      else{
        let temp = this.data[parentIndex];
        this.data[parentIndex] = this.data[index];
        this.data[index] = temp;
      }
      //    d. Update index to be the parent index
      index = parentIndex;
    }
  }
}

export { MinHeap };
