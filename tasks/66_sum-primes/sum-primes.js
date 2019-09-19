/**
 * sumPrimes - sums all the prime numbers up to and
 * including the provided number
 * @example
 * // return 17
 * sumPrimes(10);
 * @param {Number} num
 * @return {Number}
 */
export function sumPrimes(num) {
  let acc = 0;
  for (let i = num; i > 1; i--) {
    if (isPrime(i)) {
      acc += i;
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
  for (let i = 2; i <= Math.round(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
