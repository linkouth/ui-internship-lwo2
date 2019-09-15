/**
 * findCloseIndex - return the index of the matching closing bracket
 *
 * @param {String} str
 * @param {Number} index
 * @return {Number}
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
