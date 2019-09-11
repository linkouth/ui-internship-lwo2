/**
 * getVowelCount - returns the number of vowels
 * in the given string
 *
 * @param {String} str
 * @return {Number}
 */
export function getVowelCount(str) {
  let vowelStr = str.match(/[aeiuo]/g);
  if (vowelStr !== null) {
    return vowelStr.length;
  }
  return 0;
}
