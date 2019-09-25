/**
 * deepClone - creates a recursive function to copy an argument object
 * @example
 * // return copy == {a: 1, b:{c:10}}
 * var original = {a: 1, b:{c:10}};
 * var copy = deepClone(original);
 * @param {Object} obj
 * @return {Object}
 */
export function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
