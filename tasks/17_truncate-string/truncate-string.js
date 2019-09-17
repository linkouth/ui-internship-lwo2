/**
 * truncateString - truncates a string if it is longer
 * than the given maximum string length
 *
 * @param {String} str
 * @param {Number} num
 * @return {String}
 */
export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  if (num <= 3) {
    return str.slice(0, num) + '...';
  }
  return str.slice(0, num - 3) + '...';
}
