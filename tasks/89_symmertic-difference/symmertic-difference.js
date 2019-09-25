/**
 * sym - takes two or more arrays and returns an array of the
 * symmetric difference of the provided arrays
 * @example
 * // return [1, 4, 5]
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
 * @param {Array<Number>} args
 * @return {Array<Number>}
 */
export function sym(...args) {
  let result = [...args[0]];
  for (let i = 1; i < args.length; i++) {
    result = uniqueElems(result, args[i]);
  }
  return result;
}

/**
 * uniqueElems - returns unique elements of two array
 * @example
 * // return [1, 4]
 * uniqueElems([1, 2, 3], [2, 3, 4]);
 * @param {Array<Number>} arr1
 * @param {Array<Number>} arr2
 * @return {Array<Number>}
 */
function uniqueElems(arr1, arr2) {
  let result = [];
  arr1 = arr1.filter((value, index) => arr1.indexOf(value) === index);
  arr2 = arr2.filter((value, index) => arr2.indexOf(value) === index);
  result = result.concat(arr1.filter((elem) => !arr2.includes(elem)));
  result = result.concat(arr2.filter((elem) => !arr1.includes(elem)));
  return result.sort((a, b) => a - b);
}
