/**
 * pairwise - finds element pairs whose sum equal the second argument
 * arg and return the sum of their indices
 * @example
 * // return 6
 * pairwise([7, 9, 11, 13, 15], 20);
 * @param {Array<Number>} arr
 * @param {Number} arg
 * @return {Number}
 */
export function pairwise(arr, arg) {
  let result = 0;
  let elements = [...arr];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      if (elements[i] + elements[j] === arg) {
        result += i + j;
        elements[i] = NaN;
        elements[j] = NaN;
      }
    }
  }
  return result;
}
