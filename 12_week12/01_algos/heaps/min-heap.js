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
   * Removes and returns the minimum element (root) while maintaining heap property.
   * @returns {number|undefined} The smallest element, or undefined if the heap is empty.
   */
  extractMin() {
    // TODO: Implement extractMin to remove and return the minimum element
    // 1. If the heap is empty (length <= 1), return undefined
    if (this.data.length <= 1) {
      return undefined;
    }
    // 2. If there is only one real element (length === 2), pop and return it
    else if (this.data.length === 2) {
      return this.data.pop();
    }
    // 3. Otherwise:
    //    a. Store the root element (index 1) as the minimum
    let min = this.data[1];
    //    b. Move the last element in the array to the root position
    // [this.data[1]] = [this.data[this.data.length - 1]];

    this.data[1] = this.data.pop();
    //    c. Remove the last element from the array
    // this.data.pop();
    //    d. Call bubbleDown(1) to restore the heap property
    this.#bubbleDown(1);
    //    e. Return the stored minimum value
    return min;
  }

  /**
   * Builds a min-heap from an arbitrary array (bottom-up heap construction).
   * Replaces the heap's internal array with the heapified contents.
   * @param {number[]} array
   * @returns {void}
   */
  heapify(array) {
    // TODO: Implement heapify using the bottom-up approach
    // 1. Initialize internal array with 1-based indexing:
    //    - Start with [null] followed by all items from the input array
    this.data = [null, ...array];
    // 2. Determine n = number of real elements
    let n = this.data.length - 1;
    // 3. Loop from the last parent node (floor(n / 2)) down to 1:
    //    a. For each index i, call bubbleDown(i) to restore heap property
    let parentNode = Math.floor(n / 2);
    for(let i = parentNode; i >= 1; i--){
      this.#bubbleDown(i)
    }
    // 4. After the loop, the entire array should satisfy the min-heap property
  }

  /**
   * Convenience: create a MinHeap from an array in O(n) time.
   * @param {number[]} array
   * @returns {MinHeap}
   */
  static from(array) {
    const h = new MinHeap();
    h.heapify(array);
    return h;
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

    /**
     * Moves the element at the given index down until the heap property is restored.
     * @param {number} index
     * @private
     */
    #bubbleDown(index) {
      // TODO: Implement bubbleDown to restore the min-heap property
      // 1. Determine n = number of real elements (this.data.length - 1)
      let n = this.data.length - 1;
      // 2. While true:
      while (true) {
        //    a. Compute left child = index * 2
        const left = index *2;
        //    b. Compute right child = left + 1
        const right = left + 1;
        //    c. Assume smallest = index
        let smallest = index
        //    d. If left is within bounds and value at left < value at smallest, update smallest = left
        if((left <= n) && (this.data[left] < this.data[smallest])) smallest = left;
        //    e. If right is within bounds and value at right < value at smallest, update smallest = right
        if((right <= n) && (this.data[right] < this.data[smallest])) smallest = right;
        //    f. If smallest did not change, break (heap property satisfied)
        if (smallest === index) {
          break;
        }
        //    g. Otherwise, swap value at index with value at smallest
        [this.data[index]] = [this.data[smallest]];
        //    h. Update index = smallest and repeat
        index = smallest
      }
    }
}

export { MinHeap };
