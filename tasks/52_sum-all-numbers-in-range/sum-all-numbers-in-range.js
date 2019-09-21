/**
 * sumAll - returns the sum of those two numbers
 * and all numbers between them
 * @example
 * sumAll([1, 4]);
 * //return 10
 * @param {Array<Number>} range
 * @return {Number}
 */
export function sumAll(range) {
  const max = Math.max(range[0], range[1]);
  const min = Math.min(range[0], range[1]);
  return (max + min) * (max - min + 1) / 2;
}
