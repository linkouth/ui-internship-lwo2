/**
 * dropElements - drops the elements of an array (first argument),
 * starting from the front, until the predicate (second argument)
 * returns true
 * @example
 * // return [3, 4]
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
 * @param {Array<*>} arr
 * @param {Function} func
 * @return {Array<*>}
 */
export function dropElements(arr, func) {
  let idx = 0;
  while (idx < arr.length && !func(arr[idx])) {
    idx++;
  }
  return arr.slice(idx);
}
