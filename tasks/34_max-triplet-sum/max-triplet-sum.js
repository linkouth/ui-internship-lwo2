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
  return function(numbers) {
    const sortedNumbers = numbers
        .filter((value, index) => index === numbers.indexOf(value))
        .sort((a, b) => a - b);
    return sortedNumbers
        .slice(sortedNumbers.length - n)
        .reduce((acc, val) => acc + val, 0);
  };
}
