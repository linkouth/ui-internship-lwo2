/**
 * smallestCommons - finds the smallest common multiple of the
 * provided parameters that can be evenly divided by both, as
 * well as by all sequential numbers in the range between these
 * parameters
 * @example
 * // return 60
 * smallestCommons([1, 5]);
 * @param {Array<Number>} arr
 * @return {Number}
 */
export function smallestCommons(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = getRange(min, max);
  let currentLCM = lcm(range[0], range[1]);
  for (let i = 1; i < range.length; i++) {
    currentLCM = lcm(currentLCM, range[i]);
  }
  return currentLCM;
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

/**
 * lcm - finds least common multiple of two numbers
 * @example
 * // return 18
 * lcm(9, 6);
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function lcm(a, b) {
  return (a * b / gcd(a, b));
}

/**
 * range - returns sequence of numbers that begins from start,
 * finishes with end (includes)
 * @param {Number} start
 * @param {Number} end
 * @return {Array<Number>}
 */
function getRange(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
