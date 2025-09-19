/**
 * A simple Hash Table implementation using buckets (arrays) to handle collisions.
 */
class HashTable {
    /**
     * Creates a new HashTable with a fixed number of buckets.
     * Each bucket will be an array holding [key, value] pairs.
     * @param {number} [size=16] - Number of buckets (array length).
     */
    constructor(size = 16) {
        /** @type {Array<Array<[string, any]>>} */
        this.buckets = new Array(size).fill(null).map(() => []);
        this.size = size;
    }

    /**
     * Hashes a string key into an index between 0 and this.size - 1.
     * Strategy: accumulate character codes and mod by table size.
     * @param {string} key
     * @returns {number} A bucket index.
     * @complexity O(k) where k is the key length
     */
    #hash(key) {
        // TODO: Start from 0 and for each character:
        //   - add `key.charCodeAt(i) * i` (or another simple mix)
        //   - take modulo `this.size` to stay within bounds
        // Return the final index.

        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
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
        // TODO: Implement the logic described above using this.#hash and this.buckets
        const hash = this.#hash(key);
        for (const el of this.buckets[hash]) {
            if (el[0] === key) {
                el[1] = value;
                return;
            }
        }
        this.buckets[hash].push([key, value]);
    }

    /**
     * Retrieves the value for the given key, or undefined if not found.
     * @param {string} key
     * @returns {any|undefined}
     */
    get(key) {
        // TODO: hash → scan bucket → return matching value or undefined
        const hash = this.#hash(key);
        for (const bucketElement of this.buckets[hash]) {
            if (bucketElement[0] === key) return bucketElement[1];
        }

        return undefined;
    }

    /**
     * Checks whether the given key exists in the table.
     * @param {string} key
     * @returns {boolean}
     */
    has(key) {
        return Boolean(this.get(key));
    }

    /**
     * Removes the entry for the given key if found.
     * @param {string} key
     * @returns {boolean} True if removed, false if not found.
     */
    remove(key) {
        // TODO: Use splice to remove an element from the bucket array.
        if (!this.has(key)) return false;

        const hash = this.#hash(key);
        const innerBucket = this.buckets[hash];

        for (let i = 0; i < innerBucket.length; i++) {
            if (key === innerBucket[i][0]) {
                innerBucket.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    /**
     * Returns an array of all keys in the table.
     * @returns {string[]}
     */
    keys() {
        // TODO: Collect all the key elements from every bucket.
        const result = [];

        for (const [key] of this.buckets.flat()) {
            result.push(key);
        }

        return result;
    }

    /**
     * Returns an array of all values in the table.
     * @returns {any[]}
     */
    values() {
        const result = [];

        for (const [_, value] of this.buckets.flat()) {
            result.push(value);
        }

        return result;
    }
}

// 🐐
export { HashTable };
