/**
 * findElement - looks through an array (first argument) and
 * returns the first element in the array that passes a truth
 * test (second argument)
 * @example
 * // return 8
 * findElement([1, 3, 5, 8, 9, 10],
 * function(num) { return num % 2 === 0; });
 * @param {Array<*>} arr
 * @param {Function} func
 * @return {*}
 */
export function findElement(arr, func) {
  for (const element of arr) {
    if (func(element)) {
      return element;
    }
  }
}
