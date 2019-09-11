/**
 * removeFalsyValues - removes all falsy values from an array
 *
 * @param {Array<*>} arr
 * @return {Array<*>}
 */
export function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
