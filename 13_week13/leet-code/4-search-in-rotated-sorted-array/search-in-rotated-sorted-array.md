# Search in Rotated Sorted Array (Binary Search)

## Problem

You are given a strictly increasing array `nums` (no duplicates) that has been **rotated** at an unknown pivot index. For example, `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`.

Given a target value `target`, return its **index** in `nums` if it exists; otherwise return **-1**.

**Constraints (typical)**

- `1 ≤ nums.length ≤ 10^5`
- `-10^4 ≤ nums[i], target ≤ 10^4`
- `nums` contains **no duplicates**.
- Required time: **O(log n)**.

---

## Intuition

The array is sorted but **rotated** once. At any midpoint, **one half is still sorted**:

- If `nums[left] ≤ nums[mid]`, the **left half** is sorted.
- Else, the **right half** is sorted.

If the target lies within the sorted half’s range, we **keep** that half; otherwise we search the **other** half. This keeps the search logarithmic.

---

## Plan (Binary Search with Half-Check)

Maintain pointers `left` and `right`. At each step:

1. Compute `mid`.
2. If `nums[mid] === target`, return `mid`.
3. Decide which half is sorted and whether `target` falls into that half.
4. Narrow the search accordingly.
5. If the loop ends, return `-1`.

Pseudo‑code (high level):

```text
left = 0, right = n - 1
while left <= right:
  mid = floor((left + right) / 2)
  if nums[mid] == target: return mid

  if nums[left] <= nums[mid]:  # left half sorted
    if nums[left] <= target < nums[mid]:
      right = mid - 1
    else:
      left = mid + 1
  else:                        # right half sorted
    if nums[mid] < target <= nums[right]:
      left = mid + 1
    else:
      right = mid - 1

return -1
```

**Time:** `O(log n)`
**Space:** `O(1)`

---

## Testing Notes

- No rotation: behaves like classic binary search.
- Target in left sorted half vs. right sorted half.
- Target absent.
- Edge cases: length 1, two elements, large arrays.
