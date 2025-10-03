/**
 * Searches target in a rotated sorted array with no duplicates.
 * Binary search variant that picks the sorted half each step.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Index of target or -1 if not found.
 */
function searchInRotatedSortedArray(nums, target) {
  // TODO: Implement binary search in a rotated sorted array
  // 1. Initialize left = 0 and right = nums.length - 1
  let left = 0;
  let right = nums.length - 1;
  // 2. While left <= right:
  while (left <= right) {
    //    a. Compute mid = floor((left + right) / 2)
    let mid = Math.floor((left + right) / 2);
    //    b. If nums[mid] === target, return mid
    if(nums[mid] === target) return mid;
    //    c. If the left half is sorted (nums[left] <= nums[mid]):
    if (nums[left] <= nums[mid]) {
      //         - If target lies within nums[left] and nums[mid], move right = mid - 1
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      }
      else{
        //         - Else move left = mid + 1
        left = mid + 1;
      }
      continue
    }
    //       Else (the right half is sorted):
    //         - If target lies within nums[mid] and nums[right], move left = mid + 1
    if(target > nums[mid] && target < nums[right]) left = mid + 1;
    else right = mid - 1;
    //         - Else move right = mid - 1
  }
  // 3. If loop ends, return -1 (target not found)
  return -1;
}

export { searchInRotatedSortedArray };
