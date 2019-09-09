/**
 * convertToF - convert from Celsius to Fahrenheit
 *
 * @param {Number} celsius
 * @return {*}
 */
export function convertToF(celsius) {
  let fahrenheit;

  fahrenheit = celsius * 9 / 5 + 32;

  return fahrenheit;
}
