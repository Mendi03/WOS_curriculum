import { HashTable } from "../hash-table";
import { charFrequency } from "./char-frequency";

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
    const charCount = charFrequency(str, { ignoreWhitespace, caseInsensitive });

    for (const ch of str) {
        if (charCount[ch] === 1) {
            return ch;
        }
    }
    return null;
}

export { firstNonRepeatingChar };
