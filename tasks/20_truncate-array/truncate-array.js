/**
 * truncateArray - returns the remaining elements of
 * an array after cutting off n elements from the head
 *
 * @param {Array<Number>} arr
 * @param {Number} howMany
 * @return {Array<Number>}
 */
export function truncateArray(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
