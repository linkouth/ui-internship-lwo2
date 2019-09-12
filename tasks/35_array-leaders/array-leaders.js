/**
 * arrayLeaders - finds all the LEADERS in the array
 *
 * @param {Array<Number>} numbers
 * @return {Array<Number>}
 */
export function arrayLeaders(numbers) {
  const getSum = (arr) => {
    return arr.reduce((acc, val) => acc + val, 0);
  };

  return numbers.filter(
      (value, index) => value > getSum(numbers.slice(index + 1)));
}
