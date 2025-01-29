/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // Your code here
  // Test Case 1: pwwkew
  /*
  Max = 2
  Hashset = {p, w}

  Left => p
  Right => w => w (Remove p and w from hashset, slide down )


  Max = 2
  Hashset = {p, w}
  // If s[right] exists in hashmap do this
  // While s[right] exists in hashmap delete s[left]
  Hashset = {p, w}


  p w w k e w
      L
            R
  */

  /*
    Max Length = 0 => 1 => 2 => 3
    Seen Char = { k, e, w }

    p w w k e w
          L
                R


    */

  const seenCharacters = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    while (seenCharacters.has(s[right])) {
      seenCharacters.delete(s[left]);
      left++;
    }
    seenCharacters.add(s[right]);
    maxLength = Math.max(seenCharacters.size, maxLength);
    right++;
  }
  return maxLength;
}

module.exports = lengthOfLongestSubstring;
