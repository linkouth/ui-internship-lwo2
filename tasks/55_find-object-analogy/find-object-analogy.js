/**
 * whatIsInAName - an array of all objects that
 * have matching property and value pairs
 * @example
 * whatIsInAName(
 * [{ first: "Romeo", last: "Montague" },
 *  { first: "Mercutio", last: null },
 *  { first: "Tybalt", last: "Capulet" }],
 * { last: "Capulet" })
 * // return [{ first: "Tybalt", last: "Capulet" }]
 * @param {Array<Object>} collection
 * @param {Object} source
 * @return {Array<Object>}
 */
export function whatIsInAName(collection, source) {
  let result = [];
  const hasSameValues = (object, source) => {
    for (const prop of Object.keys(source)) {
      if (!object.hasOwnProperty(prop) || object[prop] !== source[prop]) {
        return false;
      }
    }
    return true;
  };
  for (const obj of collection) {
    if (hasSameValues(obj, source)) {
      result.push(obj);
    }
  }
  return result;
}
