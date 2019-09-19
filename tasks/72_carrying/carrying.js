/**
 * addTogether - create a function that sums two arguments together.
 * If only one argument is provided, then return a function that
 * expects one argument and returns the sum
 * @example
 * // return 5
 * addTogether(2, 3);
 * // return 5
 * addTogether(2)(3);
 * @return {*}
 */
export function addTogether(...args) {
  const firstArg = args[0];
  if (typeof firstArg !== 'number') {
    return undefined;
  }
  if (args.length === 2) {
    if (typeof args[1] !== 'number') {
      return undefined;
    }
    return firstArg + args[1];
  }
  return (secondArg) => {
    if (typeof secondArg !== 'number') {
      return undefined;
    }
    return firstArg + secondArg;
  };
}
