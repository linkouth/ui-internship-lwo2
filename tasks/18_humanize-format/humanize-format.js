/**
 * humanizeFormat - returns number with the correct
 * suffix such as 1st, 2nd, 3rd or 4th
 *
 * @param {Number} number
 * @return {String}
 */
export function humanizeFormat(number) {
  if (number === undefined) {
    return '';
  }
  let stringNumber = number.toString();
  let lastChar = stringNumber.substring(
      stringNumber.length - 1, stringNumber.length);
  if (lastChar === '1') {
    return stringNumber + 'st';
  }
  if (lastChar === '2') {
    return stringNumber + 'nd';
  }
  if (lastChar === '3') {
    return stringNumber + 'rd';
  }
  return stringNumber + 'th';
}
