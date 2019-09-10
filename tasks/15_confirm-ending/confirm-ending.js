/**
 * confirmEnding - checks if a string ends
 * with the given target string
 *
 * @param {String} str
 * @param {String} target
 * @return {boolean}
 */
export function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}
