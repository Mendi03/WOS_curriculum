import { HashTable } from '../hash-table';

/**
 * Finds the **first non-repeating character** in a string using the custom HashTable.
 * By default, counts are **case-insensitive** and **ignore whitespace**. You can
 * override both via the options parameter.
 *
 * Note: The returned character is the **normalized** character (after applying options),
 * which keeps the behavior predictable for case-insensitive searches.
 *
 * @param {string} str - Input string
 * @param {{ ignoreWhitespace?: boolean, caseInsensitive?: boolean }} [options]
 * @returns {string|null} The first non-repeating (normalized) character, or null if none exists
 * @complexity O(n) average time, O(k) space where k is number of distinct characters
 */
function firstNonRepeatingChar(
  str,
  { ignoreWhitespace = true, caseInsensitive = true } = {}
) {
  const table = new HashTable(Math.max(16, str.length * 2));

  // 1) Count frequency (normalized)
  for (let ch of str) {
    if (caseInsensitive) ch = ch.toLowerCase();
    if (ignoreWhitespace && /\s/.test(ch)) continue;

    if (table.has(ch)) {
      table.set(ch, table.get(ch) + 1);
    } else {
      table.set(ch, 1);
    }
  }

  // 2) Second pass: find first char whose count is 1 (normalized)
  for (let ch of str) {
    if (caseInsensitive) ch = ch.toLowerCase();
    if (ignoreWhitespace && /\s/.test(ch)) continue;

    if (table.get(ch) === 1) return ch;
  }

  return null;
}

export { firstNonRepeatingChar };