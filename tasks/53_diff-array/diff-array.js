/**
 * diffArray - Compare two arrays and return a new array
 * with any items only found in one of the two given arrays
 * @example
 * diffArray(
 * ["diorite", "andesite", "grass", "dirt","pink wool", "dead shrub"],
 * ["diorite", "andesite", "grass", "dirt", "dead shrub"])
 * //return ["pink wool"]
 * @param {Array<*>} arr1
 * @param {Array<*>} arr2
 * @return {Array<*>}
 */
export function diffArray(arr1, arr2) {
  let result = [];
  result = result.concat(arr1.filter((element) => !arr2.includes(element)));
  result = result.concat(arr2.filter((element) => !arr1.includes(element)));
  return result;
}
