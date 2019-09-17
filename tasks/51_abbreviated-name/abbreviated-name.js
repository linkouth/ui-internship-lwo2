/**
 * abbreviated - converts a fullname in abbreviated form
 * @example
 * // return 'Verbovyi D.'
 * abbreviated('Verbovyi Dmytro');
 * @param {String} str
 * @return {String}
 */
export function abbreviated(str) {
  const words = str.split(' ');
  let result = [words[0]].concat(words.slice(1).map((word) => word[0] + '.'));
  return result.join(' ');
}
