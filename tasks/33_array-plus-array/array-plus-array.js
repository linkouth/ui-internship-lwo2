/**
 * arrayPlusArray - sums up the array values by indices
 *
 * @param {Array<Number>} arr1
 * @param {Array<Number>} arr2
 * @return {Array<Number>}
 */
export function arrayPlusArray(arr1, arr2) {
  let resultArray = [];
  let minLenght = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < minLenght; i++) {
    resultArray.push(arr1[i] + arr2[i]);
  }
  if (minLenght === arr1.length) {
    resultArray = resultArray.concat(arr2.slice(minLenght));
  } else {
    resultArray = resultArray.concat(arr1.slice(minLenght));
  }
  return resultArray;
}
