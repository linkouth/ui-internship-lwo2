/**
 * checkLetters - returns true if the string in the first
 * element of the array contains all of the letters of
 * the string in the second element of the array
 *
 * @param {Array<String>} arr
 * @return {Boolean}
 */
export function checkLetters(arr) {
  let firstString = arr[0].toLowerCase();
  let secondString = arr[1].toLowerCase();
  for (const char of secondString) {
    if (firstString.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}
