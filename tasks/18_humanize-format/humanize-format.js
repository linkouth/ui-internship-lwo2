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
  switch (lastChar) {
    case '1':
      return stringNumber + 'st';
    case '2':
      return stringNumber + 'nd';
    case '3':
      return stringNumber + 'rd';
    default:
      return stringNumber + 'th';
  }
}
