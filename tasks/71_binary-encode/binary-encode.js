/**
 * binaryEncode - returns an English translated sentence (utf-8)
 * of the passed binary string
 * @example
 * // return '01100110 01101001 01110010 01100101'
 * binaryEncode('fire')
 * @param {String} str
 * @return {String}
 */
export function binaryEncode(str) {
  return str === undefined ? '' :
  str
      .split('')
      .map((char) => {
        const binary = char.charCodeAt().toString(2);
        return '0'.repeat(8 - binary.length) + binary;
      })
      .join(' ');
}
