/**
 * arrayPlusArray - sums up the array values by indices
 *
 * @param {Array<Number>} arr1
 * @param {Array<Number>} arr2
 * @return {Array<Number>}
 */
export function arrayPlusArray(arr1, arr2) {
  let resultArray = [];
  const minLength = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < minLength; i++) {
    resultArray.push(arr1[i] + arr2[i]);
  }
  return (minLength === arr1.length) ?
  resultArray.concat(arr2.slice(minLength)):
  resultArray = resultArray.concat(arr1.slice(minLength));
}
