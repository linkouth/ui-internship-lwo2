/**
 * uniqueInOrder - returns a list of items without any
 * elements with the same value next to each other
 *
 * @param {String} str
 * @return {Array<String>}
 */
export function uniqueInOrder(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
    while (str[i + 1] === str[i]) {
      i++;
    }
  }
  return result;
}
