/**
 * sumFibs - returns the sum of all odd Fibonacci numbers
 * that are less than or equal to the given num
 * @example
 * // return 10
 * sumFibs(10);
 * @param {Number} num
 * @return {Number}
 */
export function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let result = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }

    current += previous;
    previous = current - previous;
  }
  return result;
}
