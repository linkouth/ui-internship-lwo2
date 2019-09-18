/**
 * stringExpansion - the numeric values represent the
 * occurrence of each letter preceding that numeric value
 * @example
 * stringExpansion('3D2a5d2f');
 * // return 'DDDaadddddff'
 * @param {String} str
 * @return {String}
 */
export function stringExpansion(str) {
  let result = '';
  let repeatCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (isNotNumber(str[i])) {
      if (repeatCount > 0) {
        result += str[i].repeat(repeatCount);
      } else {
        result += str[i];
      }
    } else {
      repeatCount = Number.parseInt(str[i]);
    }
  }
  return result;
}

/**
 * isNotNumber - checks is arg a number or not
 * @example
 * // return true
 * isNotNumber('A');
 * // return false
 * isNotNumber('1');
 * @param {String} arg
 * @return {Boolean}
 */
const isNotNumber = (arg) => {
  return isNaN(Number.parseInt(arg));
};
