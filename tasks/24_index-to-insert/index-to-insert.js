/**
 * getIndexToInsert - returns the lowest index at which
 * a value should be inserted into an array once it has been sorted
 *
 * @param {Array<Number>} arr
 * @param {Number} num
 * @return {Number}
 */
export function getIndexToInsert(arr, num) {
  let sortedArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (num <= sortedArray[i]) {
      return i;
    }
  }
  return sortedArray.length;
}
