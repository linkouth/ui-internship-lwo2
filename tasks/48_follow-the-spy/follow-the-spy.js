/**
 * followTheSpy - determine the routes he will
 * take in his every journey
 *
 * @param {Array<Array<String>>} pairs
 * @return {String}
 */
export function followTheSpy(pairs) {
  let result = [pairs[0][0], pairs[0][1]];
  for (let i = 1; i < pairs.length; i++) {
    const nextCountry = pairs.find((pair) => pair[0] === result[i]);
    result.push(nextCountry[1]);
  }
  return result.join(', ');
}
