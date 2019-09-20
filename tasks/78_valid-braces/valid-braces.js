/**
 * validBraces - takes a string of braces, and determines if
 * the order of the braces is valid
 * @example
 * // return true
 * validBraces('([{}])');
 * // return false
 * validBraces('[({})](]');
 * @param {String} str
 * @return {Boolean}
 */
export function validBraces(str) {
  let stack = [];
  for (const brace of str) {
    if (['(', '{', '['].includes(brace)) {
      stack.push(brace);
    } else if (getOpenBracePair(brace) !== stack.pop()) {
      return false;
    }
  }
  return true;
}

/**
 * getCloseBracePair - returns brace pair. For '(' function returns ')',
 * for '{' returns '}', etc.
 * @param {String} brace
 * @return {String}
 */
function getOpenBracePair(brace) {
  switch (brace) {
    case ')':
      return '(';
    case '}':
      return '{';
    case ']':
      return '[';
  }
}
