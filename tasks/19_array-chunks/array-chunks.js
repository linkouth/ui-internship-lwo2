/**
 * arrayChunks - Write a function that splits an array
 * into groups the length of size
 *
 * @param {Array<Number>} arr
 * @param {Number} size
 * @return {Array<Array<Number>>}
 */
export function arrayChunks(arr, size) {
  let resultArray = [];
  let sizeLengthArray = [];
  for (let i = 0; i < arr.length; i++) {
    sizeLengthArray.push(arr[i]);
    if (sizeLengthArray.length % size === 0) {
      resultArray.push(sizeLengthArray);
      sizeLengthArray = [];
    }
  }
  if (sizeLengthArray.length > 0) {
    resultArray.push(sizeLengthArray);
  }

  return resultArray;
}
