/**
 * findEqualIndex - find an index N where the sum of
 * the integers to the left of N is equal to the sum
 * of the integers to the right of N
 * @example
 * findEqualIndex([1, 2, 3, 4, 3, 2, 1])
 * // return 3
 * @param {Array<Number>} arr
 * @return {Number}
 */
export function findEqualIndex(arr) {
  if (arr.length < 2) {
    return 0;
  }
  let leftSideSum = 0;
  let rightSideSum = arr.slice(1).reduce((acc, val) => acc + val, 0);
  let idx = 1;
  while (leftSideSum !== rightSideSum && idx < arr.length) {
    leftSideSum += arr[idx - 1];
    rightSideSum -= arr[idx];
    idx++;
  }
  if (idx < arr.length) {
    return idx - 1;
  }
  return -1;
}
