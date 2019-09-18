/**
 * swapCases - converts upper case letters to lower case,
 * and lower case letters to upper case
 * @example
 * // return 'hELLO wORLD'
 * swapCases('Hello World');
 * @param {String} str
 * @return {String}
 */
export function swapCases(str) {
  return str
      .split('')
      .map((char) => char.charCodeAt() <= 'Z'.charCodeAt() ?
        char.toLowerCase() :
        char.toUpperCase())
      .join('');
}
