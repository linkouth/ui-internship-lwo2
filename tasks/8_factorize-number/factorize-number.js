/**
 * factorialize - returns the factorial of the provided integer.
 *
 * @param {Number} n
 * @return {Number}
 */
export function factorialize(n) {
  let currentValue = 1;
  for (let i = 2; i <= n; i++) {
    currentValue *= i;
  }
  return currentValue;
}
