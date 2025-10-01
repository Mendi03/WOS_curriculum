# Length of Longest Substring Without Repeating Characters (Sliding Window)

## 🧩 Problem

Given a string `s`, return the **length of the longest substring** that contains **no repeating characters**.

**Substring** means a contiguous sequence of characters in `s`.

This is LeetCode problem #3: [Longest Substring Without Repeating Characters.](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

---

## ✅ Examples (for discussion)

- `s = "abcabcbb"` → longest is `"abc"` → length **3**
- `s = "bbbbb"` → longest is `"b"` → length **1**
- `s = "pwwkew"` → longest is `"wke"` (or `"kew"`) → length **3**

> We will verify behavior with an automated test suite in the repo (see `__tests__/length-of-longest-substring.test.js`).

---

## ⚙️ Constraints (typical)

- `0 ≤ s.length ≤ 5 * 10^4`
- `s` may contain letters, digits, symbols, and spaces

These constraints suggest an **O(n)** solution; an **O(n²)** approach will be borderline or too slow.

---

## 🧠 Intuition

Use a **sliding window** that expands to include new characters and **shrinks** when a duplicate appears. Keep track of the **most recent index** of each character so you can jump the left boundary forward past duplicates.

Why it works: every character moves into and out of the window at most once → linear time.

---

## 🚀 Plan (Two‑Pointer + Hash Map)

Maintain:

- `left` — start index of the current window
- `seen` — map from character → last index seen
- `best` — best window length seen so far

Pseudo‑code:

```text
best = 0
left = 0
seen = empty map
for right from 0 to s.length - 1:
  ch = s[right]
  if ch in seen and seen[ch] >= left:
    left = seen[ch] + 1   # jump left past the previous occurrence
  seen[ch] = right
  best = max(best, right - left + 1)
return best
```

**Time:** `O(n)`
**Space:** `O(min(n, Σ))` where Σ is the character set size.

---

## 📝 Starter (JavaScript, pseudo‑code only)

Create `index.js` and export the function. Implement it with the sliding‑window plan above.

```js
/**
 * Returns the length of the longest substring without repeating characters.
 * @param {string} s
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
  // TODO: Implement sliding window with a hash map of last seen indices
  // 1) Initialize best = 0, left = 0, and an empty Map for last seen positions
  // 2) Loop right from 0..s.length-1:
  //    a) ch = s[right]
  //    b) If ch was seen at index >= left, move left to that index + 1
  //    c) Update last seen position of ch to right
  //    d) Update best with current window size (right - left + 1)
  // 3) Return best
}

export { lengthOfLongestSubstring };
```

---

## 🔍 Testing Notes

- We will test typical cases like `"abcabcbb"`, `"bbbbb"`, `"pwwkew"`.
- Include edge cases: empty string `""`, single space `" "`, overlapping duplicates `"abba"`, and mixed characters.
- See the repository test file: `__tests__/length-of-longest-substring.test.js`.
