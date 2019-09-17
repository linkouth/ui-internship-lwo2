/**
 * nextInLine - Add the number to the end of the array,
 * then shift the first element of array
 *
 * @param {Array<Number>} arr
 * @param {Number} item
 * @return {Number}
 */
export function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
