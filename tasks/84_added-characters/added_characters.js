/**
 * addedChar - returns the added character. Given two strings, the
 * first being a random string and the second being the same as the
 * first, but with three added characters somewhere in the string
 * (three same characters)
 * @example
 * // return 'c'
 * @param {String} str - the origin string
 * @param {String} modStr - the modified string
 * @return {String} - the added character
 */
export function addedChar(str, modStr) {
  let idx = 0;
  while (idx < str.length && str[idx] === modStr[idx]) {
    idx++;
  }
  return modStr[idx];
}
