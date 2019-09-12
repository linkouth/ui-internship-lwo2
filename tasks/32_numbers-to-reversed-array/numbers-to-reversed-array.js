/**
 * numberToReversedArray - converts a number into a
 * reversed array of digits
 *
 * @param {Number} number
 * @return {Array<Number>}
 */
export function numberToReversedArray(number) {
  let arr = number.toString().split('').reverse();
  arr = arr.map(Number);
  return arr;
}
