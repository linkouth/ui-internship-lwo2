/**
 * arrayLeaders - finds all the LEADERS in the array
 *
 * @param {Array<Number>} numbers
 * @return {Array<Number>}
 */
export function arrayLeaders(numbers) {
  return numbers.filter(
      (value, index) => value > numbers
          .slice(index + 1)
          .reduce((acc, val) => acc + val, 0));
}
