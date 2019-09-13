/**
 * sortByBits - sort an array of 32-bit integers
 * in ascending order of the number of on bits they have
 *
 * @param {Array<Number>} arr
 * @return {Array<Number>}
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
