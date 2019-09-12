/**
 * reverseStringInRange - reverses the portion of that
 * string between those two indices inclusive
 *
 * @param {String} str
 * @param {Array<Number>} range
 * @return {String}
 */
export function reverseStringInRange(str, range) {
  let reveredSubstring = str.substring(range[0], range[1] + 1)
      .split('').reverse().join('');
  return str.substring(0, range[0]) +
        reveredSubstring +
        str.substring(range[1] + 1);
}
