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
  let currNumber = null;
  for (let i = 0; i < str.length; i++) {
    currNumber = Number.parseInt(str[i]);
    if (isNaN(currNumber)) {
      if (repeatCount > 0) {
        result += str[i].repeat(repeatCount);
      } else {
        result += str[i];
      }
    } else {
      repeatCount = currNumber;
    }
  }
  return result;
}
