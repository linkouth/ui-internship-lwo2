/**
 * findCloseIndex - return the index of the matching closing bracket
 * @example
 * findCloseIndex('((1)23(45))(aB)', 1);
 * // return 3
 * @param {String} str input string to match
 * @param {Number} index propably index of the opening bracket
 * @return {Number} index of the matching closing bracket
 */
export function findCloseIndex(str, index) {
  if (str[index] !== '(') return -1;
  let bracketsStack = [];
  for (let i = index; i < str.length; i++) {
    if (str[i] === '(') {
      bracketsStack.push(i);
    } else if (str[i] === ')' && bracketsStack.length > 0) {
      bracketsStack.pop();
      if (bracketsStack.length === 0) {
        return i;
      }
    }
  }
  return -1;
}
