# Container With Most Water (Two Pointers)

## Problem

This is the classic LeetCode problem, ["Container with Most Water"](https://leetcode.com/problems/container-with-most-water/description/).

You are given an array of non‑negative integers `heights`, where each element represents the height of a vertical line drawn at that index on the x‑axis. The width between two lines at indices `i` and `j` is `|j - i|`.

**Goal:** Choose two lines that, together with the x‑axis, form a container that holds the **most water**.

Return the **maximum area** of water that can be contained.

- **Area formula:** `area(i, j) = min(heights[i], heights[j]) * (j - i)`
- You may **not** tilt the container.

---

## Examples

1. `heights = [1,8,6,2,5,4,8,3,7]` → **49**

   - Best is between indices `1` (height 8) and `8` (height 7): `min(8,7) * (8-1) = 7 * 7 = 49`.

2. `heights = [1,1]` → **1**

   - `min(1,1) * (1-0) = 1`.

3. `heights = [4,3,2,1,4]` → **16**
   - Use indices `0` and `4`: `min(4,4) * 4 = 16`.

---

## Constraints (typical)

- `1 ≤ heights.length ≤ 10^5`
- `0 ≤ heights[i] ≤ 10^4`

These constraints suggest an **O(n)** or **O(n log n)** solution. An **O(n²)** brute force will time out for large inputs.

---

## Intuition

If you fix the width (`j - i`) and want more area, you need a **taller min height**. When you move the **shorter** line inward, you _might_ find a taller line that increases the min height; moving the **taller** line cannot help because the min height doesn’t improve while the width shrinks.

This leads to a classic **two‑pointer** strategy:

- Start with `i = 0` and `j = heights.length - 1` (maximum width).
- Compute area.
- Move the pointer at the **shorter** line inward.
- Track the best area seen.
- Repeat until pointers meet.

Why it works: at any step, moving the taller line can only reduce width without increasing `min(height[i], height[j])`, so area can’t improve that way.

---

## Brute Force (for contrast)

Check every pair `(i, j)` with nested loops and keep the max area. This is **O(n²)** and will be too slow for large arrays.

---

## Two‑Pointer Plan (O(n))

1. `left = 0`, `right = n - 1`, `best = 0`.
2. While `left < right`:
   - `width = right - left`
   - `h = Math.min(heights[left], heights[right])`
   - `best = Math.max(best, h * width)`
   - If `heights[left] < heights[right]` → `left++` else `right--`.
3. Return `best`.

**Time:** `O(n)` — each pointer moves at most `n` steps.
**Space:** `O(1)`.

---

## Edge Cases to Consider

- All zeros: `[0,0,0]` → `0`.
- Single peak: `[1,100,1]` → ends give `min(1,1)*2=2`, but better is `min(100,1)*1=1` (still 2 from ends is max).
- Many equal heights: `[5,5,5,5]`.
- Strictly increasing/decreasing arrays.

---

## Starter (JavaScript)

Create a file like `container-with-most-water.js` and implement the function.

```js
/**
 * Returns the maximum water area between two vertical lines.
 * @param {number[]} heights - non-negative integers
 * @returns {number}
 */
function maxArea(heights) {
  // TODO: Implement two-pointer approach
  // 1) Initialize left = 0, right = heights.length - 1, best = 0
  // 2) While left < right:
  //    a) width = right - left
  //    b) h = Math.min(heights[left], heights[right])
  //    c) best = Math.max(best, h * width)
  //    d) If heights[left] < heights[right], left++ else right--
  // 3) Return best
}

export { maxArea };
```

> **Tip:** Avoid integer overflow worries in JS here — values are small. Focus on pointer movement logic.

---

## Discussion Prompts

- Why is moving the taller pointer never helpful?
- Could any greedy choice here lead to a worse global answer? Why not?
- How does this compare to sliding window problems?

---

## Extensions (Optional)

- Return **the pair of indices** that achieves the max area, not just the value.
- Modify to handle very large inputs (streamed heights): how would you rethink the approach?
- Visualize the scan with a plot to see how `best` evolves as pointers move.
