/**
 * trimWhiteSpaces - removes white spaces in the string,
 * returns the string
 *
 * @param {String} str
 * @return {String}
 */
export function trimWhiteSpaces(str) {
  return str.replace(/ /g, '');
}
