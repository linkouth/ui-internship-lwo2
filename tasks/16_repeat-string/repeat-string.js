/**
 * repeatStringNumTimes - repeats a given string num times
 *
 * @param {String} str
 * @param {Number} num
 * @return {String}
 */
export function repeatStringNumTimes(str, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
