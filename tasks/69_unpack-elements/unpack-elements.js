/**
 * unpackArray - flatten a nested array
 * @example
 * // return [1, 2, 3, 4]
 * unpackArray([1, [2], [3, [[4]]]]);
 * @param {Array<*>} arr
 * @return {Array<*>}
 */
export function unpackArray(arr) {
  const result = [];
  const flat = (array) => {
    for (const element of array) {
      if (Array.isArray(element)) {
        flat(element);
      } else {
        result.push(element);
      }
    }
  };
  flat(arr);
  return result;
}
