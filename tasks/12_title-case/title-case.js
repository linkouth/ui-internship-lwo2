/**
 * titleCase - Return the provided string
 * with the first letter of each word capitalized
 *
 * @param {String} str
 * @return {String}
 */
export function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  return words
      .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
      .join(' ');
}
