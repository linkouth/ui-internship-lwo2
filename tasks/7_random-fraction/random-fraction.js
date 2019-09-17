/**
 * randomFraction - generates random decimal number in range 0 to 1
 *
 * @return {Number}
 */
export function randomFraction() {
  let random = Math.random() * 10;
  return Math.round(random) / 10;
}
