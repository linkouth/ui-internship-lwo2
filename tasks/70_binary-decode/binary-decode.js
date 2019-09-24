/**
 * binaryDecode - returns an English translated sentence of
 * the passed binary string
 * @example
 * // return 'fire'
 * binaryDecode('01100110 01101001 01110010 01100101');
 * @param {String} str
 * @return {String}
 */
export function binaryDecode(str) {
  return !str ? '' : str
      .split(' ')
      .map((word) => String.fromCharCode(Number.parseInt(word, 2)))
      .join('');
}
