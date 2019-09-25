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
  let currentLCM = leastCommonMultiple(range[0], range[1]);
  for (let i = 1; i < range.length; i++) {
    currentLCM = leastCommonMultiple(currentLCM, range[i]);
  }
  return currentLCM;
}

/**
 * greatestCommonDivision - finds greatest common division of two numbers
 * @example
 * // return 3
 * greatestCommonDivision(15, 12);
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function greatestCommonDivision(a, b) {
  let tmp = null;
  while (b !== 0) {
    tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}

/**
 * leastCommonMultiple - finds least common multiple of two numbers
 * @example
 * // return 18
 * leastCommonMultiple(9, 6);
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function leastCommonMultiple(a, b) {
  return (a * b / greatestCommonDivision(a, b));
}

/**
 * getRange - returns sequence of numbers that begins from start,
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
