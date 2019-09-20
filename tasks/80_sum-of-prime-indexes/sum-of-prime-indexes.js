/**
 * sumPrimeIndexedElements - returns the sum of elements occupying
 * prime-numbered indices
 * @example
 * // return 21
 * sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8]);
 * @param {Array<Number>} arr
 * @return {Number}
 */
export function sumPrimeIndexedElements(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(i)) {
      acc += arr[i];
    }
  }
  return acc;
}

/**
 * isPrime - checks is number prime or not
 * @example
 * // return true
 * isPrime(17);
 * @param {Number} num
 * @return {Boolean}
 */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.round(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
