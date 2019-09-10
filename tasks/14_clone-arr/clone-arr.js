/**
 * cloneArr - returns array deep clone
 *
 * @param {Array<*>} arr
 * @return {Array<*>}
 */
export function cloneArr(arr) {
  let clonedArray = [];
  arr.forEach((element) => {
    clonedArray.push(element);
  });
  return clonedArray;
}
