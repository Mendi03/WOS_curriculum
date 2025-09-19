import { HashTable } from '../hash-table';

/**
 * Deduplicates an array using the custom HashTable (separate chaining via array buckets).
 * Preserves the **first occurrence** order.
 *
 * Limitations: keys in this HashTable are strings; to support mixed primitive types
 * without collisions (e.g., 1 vs '1'), we prefix by typeof.
 *
 * @template T
 * @param {T[]} arr - Input array (prefer primitives for stable behavior).
 * @returns {T[]} A new array with duplicates removed in first-seen order.
 * @complexity O(n) average time, O(n) space
 */
function dedupeArray(arr) {
  const n = Array.isArray(arr) ? arr.length : 0;
  const table = new HashTable(Math.max(16, n * 2));
  const out = [];

  for (const item of arr) {
    const key = `${typeof item}:${String(item)}`;
    if (!table.has(key)) {
      table.set(key, true);
      out.push(item);
    }
  }
  return out;
}

export { dedupeArray };