/**
 * findMissing - find the missing term in an Arithmetic Progression
 * @example
 * // return 7
 * findMissing([1, 3, 5, 9, 11]);
 * @param {Array<Number>} arr
 * @return {Numbers}
 */
export function findMissing(arr) {
  const difference = (arr[arr.length - 1] - arr[0]) / arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) > Math.abs(difference)) {
      return arr[i] + difference;
    }
  }
}
