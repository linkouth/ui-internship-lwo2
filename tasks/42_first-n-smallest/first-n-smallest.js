/**
 * firstNSmallest - array of integers and the expected
 * number n of smallest elements to return
 *
 * @param {Array<Number>} arr
 * @param {Number} n
 * @return {Array<Number>}
 */
export function firstNSmallest(arr, n) {
  const nSmallest = [...arr].sort((a, b) => a - b).slice(0, n);
  return arr.filter((number) => nSmallest.includes(number)).slice(0, n);
}
