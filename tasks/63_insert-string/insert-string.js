/**
 * insert - insert a string within a string at a
 * particular position (default is 1)
 * @example
 * // return 'JavaScript We are doing some exercises.'
 * insert('We are doing some exercises.','JavaScript ')
 * @param {String} str
 * @param {String} insertable
 * @param {Number} position
 * @return {String}
 */
export function insert(str, insertable, position = 0) {
  if (!insertable) {
    return str;
  }
  if (position !== 0) {
    return str.substring(0, position) + insertable + str.slice(position);
  } else {
    return insertable + str;
  }
}
