/**
 * Finds the length of the longest substring without repeating characters.
 *
 * This uses a sliding window approach with a hash map that tracks the last
 * seen index of each character. When a duplicate character is encountered
 * within the current window, the left pointer jumps past the previous index
 * of that character.
 *
 * @param {string} s - The input string.
 * @returns {number} The length of the longest substring of `s` that contains no repeating characters.
 *
 * Note: This is the classic "Longest Substring Without Repeating Characters"
 * problem (LeetCode #3). It is different from "Minimum Window Substring."
 *
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(s) {
  // TODO: Implement sliding window with a hash map of last seen indices
  // 1) Initialize best = 0, left = 0, and an empty Map for last seen positions
  let best = 0;
  let left = 0;
  let right = 0;

  let newMap = new Map()
  // 2) Loop right from 0..s.length-1:
  for(let i = 0; i < s.length - 1; i++){
    //    a) ch = s[right]
    let ch = s[i+1];
    //    b) If ch was seen at index >= left, move left to that index + 1
    if (i == 0) {
      newMap.set(s[i], i);
    }
    if (newMap.has(ch)) {
      right = i
      if (best < (right - left + 1)) {
        best = right - left + 1;
      }

      // console.log(best);
      
      newMap = new Map()
      left +=1;
      continue
    }
    else{
      newMap.set(ch, i);
    }
    //    d) Update best with current window size (right - left + 1)
  }
  
  return best;
  // 3) Return best
}

export { lengthOfLongestSubstring };

//    c) Update last seen position of ch to right