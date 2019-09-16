/**
 * stringExpansion - the numeric values represent the
 * occurrence of each letter preceding that numeric value
 *
 * @param {String} str
 * @return {String}
 */
export function stringExpansion(str) {
  let result = '';
  let repeatCount = 0;
  const isLetter = (arg) => {
    return isNaN(Number.parseInt(arg));
  };
  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
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
