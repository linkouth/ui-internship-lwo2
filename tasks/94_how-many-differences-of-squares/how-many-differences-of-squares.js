/**
 * squares - takes a positive integer n and returns the amount of
 * numbers between 1 and n (inclusive) that can be represented as
 * the difference of two perfect squares. The mean of the function finds
 * amount of numbers which are less or equal than num and are square of
 * a number. Numbers that are odd or that are division by 4.
 * @example
 * // return 7
 * squares(10);
 * @param {Number} num
 * @return {Number}
 */
export function squares(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0 || i % 2 > 0) {
      result++;
    }
  }
  return result;
}
