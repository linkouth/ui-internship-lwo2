/**
 * minNumberToPrime - find minimum number to be inserted
 * in a list, so that sum of all elements of list should
 * equal the closest prime number
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */
export function minNumberToPrime(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const isPrime = (num) => {
    for (let i = 2; i <= Math.round(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  let ans = sum;
  while (!isPrime(ans)) {
    ans++;
  }
  return ans - sum;
}
