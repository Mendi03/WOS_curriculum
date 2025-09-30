/**
 * Groups an array of strings into arrays of anagrams.
 *
 * @param {string[]} strs - The input array of strings.
 * @returns {string[][]} An array of groups, where each group contains words that are anagrams of each other.
 */
function groupAnagrams(strs) {
  // TODO: Implement groupAnagrams using a hash map
  // 1. Initialize a Map to hold key → group of words
  const hashMap = new Map();
  // 2. For each word in strs:
  for (const word of strs) {
    //    a. Convert the word into a canonical key (e.g., sort its letters)
    const key = word.split("").sort().join("");
    //    b. Insert the word into the Map under that key
    if (!hashMap.has(key)) hashMap.set(key, []);
    hashMap.get(key).push(word)

    // console.log(hashMap);
    
  }

  // 3. Collect all the values from the Map
  // 4. Return them as an array of arrays
  console.log(...hashMap.values());
  
  return [...hashMap.values()];
}

export { groupAnagrams };
