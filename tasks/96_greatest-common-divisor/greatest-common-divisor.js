/**
 * greatestCommonDivisor - accepts two numbers (a, b) and returns
 * their greatest common divisor
 * @example
 * // return 9
 * greatestCommonDivisor(36, 45);
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function greatestCommonDivisor(a, b) {
  let tmp = null;
  while (b !== 0) {
    tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}
