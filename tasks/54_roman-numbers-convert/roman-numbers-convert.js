/**
 * convertToRoman - convert the given number into a roman numeral
 * @example
 * convertToRoman(2);
 * //return 'II'
 * @param {Number} num
 * @return {String}
 */
export function convertToRoman(num) {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC',
    'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = [];
  let count;
  for (let i = 0; i < numbers.length; i++) {
    count = Number.parseInt(num / numbers[i]);
    result.push(romanNumbers[i].repeat(count));
    num -= numbers[i] * count;
  }
  return result.join('');
}
