/**
 * findLongestWord - returns the length of the longest
 * word in the provided sentence
 *
 * @param {String} str
 * @return {Number}
 */
export function findLongestWord(str) {
  let words = str.split(' ');
  let getMax = (firstArg, secondArg) =>
    firstArg.length > secondArg.length ? firstArg : secondArg;
  let maxLengthWord = words.reduce(getMax, 0);
  return maxLengthWord.length;
}
