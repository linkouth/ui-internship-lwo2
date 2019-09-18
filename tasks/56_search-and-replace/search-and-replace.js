/**
 * myReplace - perform a search and replace on the
 * sentence using the arguments provided and return
 * the new sentence
 * @example
 * // returns 'Let us go to the mall'
 * myReplace("Let us go to the store", "store", "mall");
 * @param {String} str
 * @param {String} before
 * @param {String} after
 * @return {String}
 */
export function myReplace(str, before, after) {
  let replaceValue = '';
  if (before.charAt(0) <= 'Z') {
    replaceValue = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    replaceValue = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, replaceValue);
}
