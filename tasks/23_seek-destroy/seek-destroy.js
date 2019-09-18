/**
 * destroyer - removes all elements from the initial
 * array that are of the same value as these arguments
 *
 * @param {Array<*>} arr
 * @return {Array}
 */
export function destroyer(arr, ...args) {
  return arr.filter((element) => args.indexOf(element) === -1);
}
