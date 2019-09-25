/**
 * leastCommonMultiple - accepts two numbers (a, b) and returns their
 * least common multiple
 * @example
 * // return 12
 * leastCommonMultiple(6, 4);
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function leastCommonMultiple(a, b) {
  return (a * b / gcd(a, b));
}

/**
 * gcd - finds greatest common division of two numbers
 * @example
 * // return 3
 * gcd(15, 12);
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function gcd(a, b) {
  let tmp = null;
  while (b !== 0) {
    tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}
