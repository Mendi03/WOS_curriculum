/**
 * Returns the length of the Longest Common Subsequence (LCS) of two strings.
 * Bottom-up dynamic programming over prefixes.
 *
 * Time: O(m*n)
 * Space: O(m*n) — can be reduced to O(min(m, n)) with a rolling row.
 *
 * @param {string} text1
 * @param {string} text2
 * @returns {number}
 */
function longestCommonSubsequence(text1, text2) {
  // TODO: Implement bottom-up DP
  // 1) Let m = text1.length, n = text2.length
  let m = text1.length
  let n = text2.length
  // 2) Create (m+1) x (n+1) array dp filled with 0
  const dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0); // Creating an array of size 4 and filled of 1
  }

  // console.log(dp);
  
  // 3) For i from 1..m:
  for(let i = 1; i <= m; i++){
    //      For j from 1..n:
    for(let i = 1; i <= n; i++){
      //        If text1[i-1] === text2[j-1]: dp[i][j] = dp[i-1][j-1] + 1
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      }
      //        Else: dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      else{
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
    
  }
  // 4) Return dp[m][n]
  return dp[m][n]
}

export { longestCommonSubsequence };
