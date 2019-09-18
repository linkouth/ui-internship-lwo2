/**
 * maxTripletSum - find maximum triplet sum
 * in the array without duplicates
 *
 * @param {Array<Number>} numbers
 * @return {Number}
 */
export function maxTripletSum(numbers) {
  return maxNSum(3)(numbers);
}

/**
 * maxNSum - find maximum n sum
 * in the array without duplicates
 *
 * @param {Number} n
 * @return {Function}
 */
export function maxNSum(n) {
  return (numbers) => {
    return numbers
        .filter((value, index) => index === numbers.lastIndexOf(value))
        .sort((a, b) => b - a)
        .slice(0, n)
        .reduce((acc, val) => acc + val, 0);
  };
}
