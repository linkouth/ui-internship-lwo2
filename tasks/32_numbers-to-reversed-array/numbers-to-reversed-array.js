/**
 * numberToReversedArray - converts a number into a
 * reversed array of digits
 *
 * @param {Number} number
 * @return {Array<Number>}
 */
export function numberToReversedArray(number) {
  const arr = number.toString().split('').reverse();
  return arr.map(Number);
}
