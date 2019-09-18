/**
 * uniteUnique - returns a new array of unique values in
 * the order of the original provided arrays
 * @example
 * // return [1, 3, 2, 5, 4]
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 * @param {Array<Number>} arr
 * @return {Array<Number>}
 */
export function uniteUnique(...arr) {
  const unite = arr.reduce((unite, array) => unite.concat(array), []);
  return unite.filter((value, index) => unite.indexOf(value) === index);
}
