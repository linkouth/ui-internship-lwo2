/**
 * orbitalPeriod - return a new array that transforms the element's
 * average altitude into their orbital periods
 * @example
 * // return [{name: "sputnik", orbitalPeriod: 86400}]
 * orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
 * @param {Array<Object>} arr - list of satelites
 * @return {Array<Object>}
 */
export function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  let orbPeriod = null;
  for (const obj of arr) {
    orbPeriod = 2 * Math.PI *
    Math.sqrt(Math.pow(obj['avgAlt'] + EARTH_RADIUS, 3) / GM);
    obj['orbitalPeriod'] = Math.round(orbPeriod);
    delete obj['avgAlt'];
  }
  return arr;
}
