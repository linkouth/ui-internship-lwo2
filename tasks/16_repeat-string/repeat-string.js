/**
 * repeatStringNumTimes - repeats a given string num times
 *
 * @param {String} str
 * @param {Number} num
 * @return {String}
 */
export function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }
  return str.repeat(num);
}
