/**
 * addTogether - create a function that sums two arguments together.
 * If only one argument is provided, then return a function that
 * expects one argument and returns the sum
 * @example
 * // return 5
 * addTogether(2, 3);
 * // return 5
 * addTogether(2)(3);
 * @param {Number} firstArg
 * @param {Number} secondArg
 * @return {*}
 */
export function addTogether(firstArg, secondArg) {
  if (typeof firstArg !== 'number') {
    return undefined;
  }
  if (secondArg !== undefined) {
    if (typeof secondArg !== 'number') {
      return undefined;
    }
    return firstArg + secondArg;
  }
  return (secondArg) => {
    if (typeof secondArg !== 'number') {
      return undefined;
    }
    return firstArg + secondArg;
  };
}
