/**
 * fatFingers - gives a string that Freddy wants to type, emulate the
 * keyboard misses where each A supposedly pressed is replaced with
 * CapsLock, and return the string that Freddy actually types
 * Freddy has a really fat left pinky finger, and every time Freddy
 * tries to type an A, he accidentally hits the CapsLock key
 * @example
 * // return 'The quick brown fox jumps over the lZY DOG.'
 * fatFingers("The quick brown fox jumps over the lazy dog.");
 * @param {String} str
 * @return {String}
 */
export function fatFingers(str) {
  if (!str.length) {
    return '';
  }
  let result = '';
  let isCaps = false;
  for (const ch of str) {
    if (ch.toUpperCase() === 'A') {
      isCaps = !isCaps;
    } else {
      if (isCaps) {
        result += isUpperCase(ch) ? ch.toLowerCase(): ch.toUpperCase();
      } else {
        result += ch;
      }
    }
  }
  return result;
}

/**
 * isUpperCase - returns true if char is in upper case, else false
 * @example
 * // return true
 * isUpperCase('B');
 * @param {String} char
 * @return {Boolean}
 */
const isUpperCase = (char) => {
  return char >= 'A' && char <= 'Z';
};
