/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10, 13]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array

  /*
  pattern = aba
  left = 0;
  right = 3
  indices = [0, 2, 4]
  a b a b a b a b
            L     R
        

  */
  let left = 0;
  let right = pattern.length;
  const indices = [];

  if (text.length === 0 || pattern.length === 0) return indices;

  while (right <= text.length) {
    const currStr = text.slice(left, right);
    if (currStr === pattern) {
      indices.push(left);
    }
    left++;
    right++;
  }
  return indices;
}

module.exports = stringMatching;
