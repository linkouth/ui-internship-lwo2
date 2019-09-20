/**
 * numPrimorial - Is similar to factorial of a number, In primorial,
 * not all the natural numbers get multiplied, only prime numbers are
 * multiplied to calculate the primorial of a number
 * @example
 * // return 30
 * numPrimorial(3);
 * @param {Number} num
 * @return {Number}
 */
export function numPrimorial(num) {
  let acc = 1;
  let countPrimes = 0;
  let idx = 2;
  while (countPrimes < num) {
    if (isPrime(idx)) {
      acc *= idx;
      countPrimes++;
    }
    idx++;
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
