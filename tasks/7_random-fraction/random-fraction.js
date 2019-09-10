/**
 * randomFraction - generates random decimal number in range 0 to 1
 *
 * @return {Number}
 */
export function randomFraction() {
  return Math.round(Math.random() * 10) / 10;
}
