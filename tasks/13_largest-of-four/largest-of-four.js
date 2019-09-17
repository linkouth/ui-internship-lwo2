/**
 * largestOfFour - returns an array consisting of the
 * largest number from each provided sub-array
 *
 * @param {Array<Array<Number>>} arr
 * @return {Array<Number>}
 */
export function largestOfFour(arr) {
  let resultArray = [];
  for (const numbersList of arr) {
    resultArray.push(Math.max.apply(null, numbersList));
  }
  return resultArray;
}
