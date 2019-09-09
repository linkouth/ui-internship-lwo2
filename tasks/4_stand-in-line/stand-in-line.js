/**
 * convertToF - convert from Celsius to Fahrenheit
 *
 * @param {Array<Number>} arr
 * @param {Number} item
 * @return {Number}
 */
export function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
