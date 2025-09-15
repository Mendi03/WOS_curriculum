/**
 * A simple Hash Table implementation using buckets (arrays) to handle collisions.
 *
 * Day 1 scope:
 *  - constructor(size)
 *  - #hash(key)
 *  - set(key, value)
 *
 * Later days (commented out below):
 *  - get, has (Day 2)
 *  - remove, keys, values (Day 3)
 *  - entries (Day 4)
 */
class HashTable {
  /**
   * Creates a new HashTable with a fixed number of buckets.
   * Each bucket will be an array holding [key, value] pairs.
   * @param {number} [size=16] - Number of buckets (array length).
   */
  constructor(size = 16) {
    // Initialize this.buckets as an array of length `size`,
    this.buckets = new Array(size);
    // where each element is an empty array (the bucket).
    for (let i = 0; i < size; i++) {
      this.buckets[i] = [];
    }
    // Also store `size` on `this.size` for the hash function to use.
    this.size = size;
    // Example shape after init: [[/* pairs */], [/* pairs */], ...]
  }

  /**
   * Hashes a string key into an index between 0 and this.size - 1.
   * Strategy: accumulate character codes and mod by table size.
   * @param {string} key
   * @returns {number} A bucket index.
   * @complexity O(k) where k is the key length
   */
  #hash(key) {
    // Start from 0 and for each character:
    let total = 0;
    for (var i = 0; i < key.length; i++) {
      //   - add `key.charCodeAt(i) * i` (or another simple mix)
      total += key.charCodeAt(i) * i;
    }
    //   - take modulo `this.size` to stay within bounds
    // Return the final index.
    return total % this.size;
  }

  /**
   * Inserts or updates a [key, value] pair in the appropriate bucket.
   * Steps:
   *  1) Compute the bucket index via #hash(key).
   *  2) Scan the bucket array:
   *     - If an entry with the same key exists, update its value and return.
   *  3) Otherwise, push a new pair [key, value] to the bucket.
   * @param {string} key
   * @param {any} value
   * @returns {void}
   */
  set(key, value) {
    // Implement the logic described above using this.#hash and this.buckets
    var index = this.#hash(key);
    var currBucket = this.buckets[index];
    var found = false;
    for (let i = 0; i < currBucket.length; i++) {
      if (currBucket[i][0] === key) {
        currBucket[i][1] = value;
        found = true;
      }
    }
    if (!found) currBucket.push([key, value]);
  }
}

export { HashTable };
