/**
 * getAverage - return the average of the given array
 * rounded down to its nearest integer
 *
 * @param {Array<Number>} marks
 * @return {Number}
 */
export function getAverage(marks) {
  let sum = marks.reduce((acc, val) => acc + val, 0);
  return Math.floor(sum / marks.length);
}
