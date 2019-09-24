/**
 * palindrome - returns true if the given string is a palindrome.
 * Otherwise, return false
 * @example
 * // return true
 * palindrome(("race car");
 * @param {String} str
 * @return {Boolean}
 */
export function palindrome(str) {
  const filteredString = str.replace(/[\W, \s, _]/g, '').toLowerCase();
  for (let i = 0; i < filteredString.length / 2; i++) {
    if (filteredString[i] !==
      filteredString[filteredString.length - i - 1]) {
      return false;
    }
  }
  return true;
}
