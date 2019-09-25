/**
 * sortByBits - sort an array of 32-bit integers
 * in ascending order of the number of on bits they have
 * @example
 * sortByBits([3, 8, 3, 6, 5, 7, 9, 1];
 * //return [1, 8, 3, 3, 5, 6, 9, 7]
 * @param {Array<Number>} arr input array
 * @return {Array<Number>} output sorted array
 */
export function sortByBits(arr) {
  const getOnesAtNumber = (number) => {
    return number.toString(2).match(/1/g);
  };
  return arr.sort((a, b) => {
    if (getOnesAtNumber(a) > getOnesAtNumber(b)) {
      return 1;
    } else if (getOnesAtNumber(a) < getOnesAtNumber(b)) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
}
