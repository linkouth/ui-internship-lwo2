/**
 * findEqualIndex - find an index N where the sum of
 * the integers to the left of N is equal to the sum
 * of the integers to the right of N
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */
export function findEqualIndex(arr) {
  if (arr.length < 2) return 0;
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
