/**
 * validate_bet - receives the game type and the user's text message as
 * input, and checks if the bet is valid or not. If it's valid, returns
 * the chosen numbers as a list, sorted in increasing order. If it's
 * invalid, return 'None'
 * @example
 * // return [1, 2, 3, 4, 5]
 * validate_bet([5, 90], "5 , 3, 1  4,2");
 * // return null
 * validate_bet([5, 90], "1, 2; 3, 4, 5");
 * @param {Array<Number>} arr
 * @param {String} str
 * @return {*}
 */
export function validate_bet(arr, str) {
  const numbers = str
      .replace(/,/g, ' ')
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(Number);
  if (numbers.length < arr[0] || arr[1] < Math.max(...numbers)) {
    return 'None';
  }
  if (numbers.filter(isNaN).length > 0) {
    return 'None';
  }
  return numbers.sort((a, b) => a - b);
}
