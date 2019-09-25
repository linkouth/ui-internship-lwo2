/**
 * expressionMatter - returns the largest number obtained after
 * inserting the following operators and brackets: +, *, ()
 * @example
 * // reuturn 6
 * expressionMatter(2, 1, 2);
 * // return 4
 * expressionMatter(2, 1, 1)
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @return {Number}
 */
export function expressionMatter(a, b, c) {
  const results = [
    a * (b + c),
    (a + b) * c,
    a * b * c,
    a + b + c,
  ];
  return Math.max(...results);
}
