/**
 * minNumberToPrime - 
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
  while(!isPrime(ans)) {
    ans++;
  }
  return ans - sum;
}