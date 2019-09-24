/**
 * maxProduct - find the maximum product obtained
 * from multiplying 2 adjacent numbers in the array
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */
export function maxProduct(arr) {
  let maxMultiply = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (maxMultiply < arr[i] * arr[i + 1]) {
      maxMultiply = arr[i] * arr[i + 1];
    }
  }
  return maxMultiply;
}
