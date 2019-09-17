/**
 * firstNSmallest - array of integers and the expected
 * number n of smallest elements to return
 * @example
 * firstNSmallest([1, 2, 3, 4, 5], 3);
 * // return [1, 2, 3]
 * @param {Array<Number>} arr input array
 * @param {Number} n number of smallest elements
 * @return {Array<Number>} array of n smallest elements
 */
export function firstNSmallest(arr, n) {
  const nSmallest = [...arr].sort((a, b) => a - b).slice(0, n);
  return arr.filter((number) => nSmallest.includes(number)).slice(0, n);
}
