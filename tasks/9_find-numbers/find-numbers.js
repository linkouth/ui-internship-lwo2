/**
 * getNumbers - returns numbers in str
 *
 * @param {String} str
 * @return {Array<Number>}
 */
export function getNumbers(str) {
  return str.match(/\d+/g).map(Number);
}
