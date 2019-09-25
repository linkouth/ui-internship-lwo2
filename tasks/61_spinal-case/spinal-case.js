/**
 * spinalCase - converts a string to spinal case. Spinal case
 * is all-lowercase-words-joined-by-dashes
 * @example
 * // return 'this-is-spinal-tap'
 * spinalCase("thisIsSpinalTap");
 * @param {String} str
 * @return {String}
 */
export function spinalCase(str) {
  return str
      .match(/[A-Za-z][a-z]+[\W]?/g)
      .map((word) => word.toLowerCase().replace(/[W, S, -]/, ''))
      .join('-');
}
