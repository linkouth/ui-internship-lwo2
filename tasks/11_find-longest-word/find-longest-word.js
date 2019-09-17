/**
 * findLongestWord - returns the length of the longest
 * word in the provided sentence
 *
 * @param {String} str
 * @return {Number}
 */
export function findLongestWord(str) {
  const words = str.split(' ');
  const maxLengthWord = words.reduce((firstArg, secondArg) =>
  firstArg.length > secondArg.length ? firstArg : secondArg, 0);
  return maxLengthWord.length;
}
