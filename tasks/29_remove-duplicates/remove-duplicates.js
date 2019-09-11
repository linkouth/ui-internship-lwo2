/**
 * removeDuplicates - removes duplicates from an array
 * of numbers and returns it as a result
 *
 * @param {Array<Number>} a
 * @return {Array<Number>}
 */
export function removeDuplicates(a) {
  return a.filter((value, index) => a.indexOf(value) === index);
}
