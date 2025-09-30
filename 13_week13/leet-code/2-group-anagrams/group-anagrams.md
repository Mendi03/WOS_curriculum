# Group Anagrams (Hashing)

## 🧩 Problem

Given an array of strings `strs`, group the **anagrams** together and return a 2D array of groups.

Two strings are anagrams if they contain the **same characters with the same frequencies**, possibly in a different order.

**Example**

```txt
Input:  ["eat","tea","tan","ate","nat","bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
```

Order of the groups and the order of strings inside each group **does not matter**.

---

## ⚙️ Constraints (typical)

- `1 ≤ strs.length ≤ 10^4`
- `0 ≤ strs[i].length ≤ 100`
- `strs[i]` consists of lowercase English letters (assume case-sensitive unless stated otherwise)

---

## 🧠 Intuition

All anagrams share the **same multiset of letters**. If we can map each word to a **canonical key** that’s the same for all its anagrams, we can group them easily with a hash map.

Two common keys:

1. **Sorted key**: sort the letters in the word. e.g. `"eat" → "aet"`, `"tea" → "aet"`.
   - Complexity per word: `O(k log k)` (k = word length)
2. **Frequency key**: 26-length character counts. e.g. `"abb" → [1,2,0,0,...]`.
   - Complexity per word: `O(k)`; better asymptotically for long strings.

For clarity, we’ll use the **sorted key** today.

---

## 🚀 Plan (Sorted-Key Hash Map)

1. Create a `Map` from `key → array of original words`.
2. For each string `s` in `strs`:
   - Compute `key = sort(s)`.
   - Push `s` into `map[key]`.
3. Return `map.values()` as an array of arrays.

**Time:** `O(n · k log k)`
**Space:** `O(n · k)` (to store all strings in groups)

---

## 🌟 Extensions (Optional)

- Implement the **frequency-key** version to achieve `O(n·k)` time (per word `O(k)`).
- Return groups **sorted by size** descending.
- Normalize inputs to lowercase if your data may contain mixed case.
