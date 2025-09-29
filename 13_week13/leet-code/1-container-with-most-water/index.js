/**
 * Returns the maximum water area between two vertical lines.
 * @param {number[]} heights - non-negative integers
 * @returns {number}
 */
function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let best = 0;
  while (left < right) {
    let width = right - left;
    let height = Math.min(heights[left], heights[right]);
    best = Math.max(best, height * width);
    if (heights[left] < heights[right]) left++;
    else right--;
  }
  return best;
}

export { maxArea };
