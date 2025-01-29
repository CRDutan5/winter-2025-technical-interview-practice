/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */

function isValidCharacter(char) {
  const regex = /[a-zA-Z0-9]/.test(char);
  return regex;
}

function isPalindrome(str) {
  str = str.toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    while (left < right && !isValidCharacter(str[left])) {
      left++;
    }

    while (left < right && !isValidCharacter(str[right])) {
      right--;
    }

    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
