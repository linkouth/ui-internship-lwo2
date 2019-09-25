/**
 * updateInventory - compares and update the inventory stored in a 2D
 * array against a second 2D array of a fresh delivery
 * @example
 * // let curInv = [
 * // [21, "Bowling Ball"],
 * // [2, "Dirty Sock"],
 * // [1, "Hair Pin"],
 * // [5, "Microphone"]
 * // ];
 * // let newInv = [
 * // [2, "Hair Pin"],
 * // [3, "Half-Eaten Apple"],
 * // [67, "Bowling Ball"],
 * // [7, "Toothpaste"]
 * // ];
 * // return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"],
 * // [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
 * updateInventory(curInv, newInv);
 * @param {Array<Array<*>>} curInv
 * @param {Array<Array<*>>} newInv
 * @return {Array<Array<*>>}
 */
export function updateInventory(curInv, newInv) {
  let result = Object.assign(curInv, {});
  let itemIndex = -1;
  for (const item of newInv) {
    itemIndex = itemIndexByName(result, item[1]);
    if (itemIndex !== -1) {
      result[itemIndex][0] += item[0];
    } else {
      result.push(item);
    }
  }
  return result.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
}

/**
 * itemIndexByName - returns index of item that has the name. Returns -1
 * if there is no one
 * @param {Array<Array<*>>} items
 * @param {String} name
 * @return {Number}
 */
function itemIndexByName(items, name) {
  for (let i = 0; i < items.length; i++) {
    if (items[i][1] === name) {
      return i;
    }
  }
  return -1;
}
