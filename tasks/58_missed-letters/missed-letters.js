/**
 * findLetter - find the missing letter in the passed
 * letter range and return it
 * @example
 * // return 'd'
 * findLetter("abce");
 * @param {String} str
 * @return {String}
 */
export function findLetter(str) {
  let idx = 0;
  while (idx < str.length - 1 &&
    (str[idx + 1].charCodeAt() - str[idx].charCodeAt()) === 1) {
    idx++;
  }
  return idx < str.length - 1 ?
  String.fromCharCode(str[idx].charCodeAt() + 1) :
  undefined;
}
