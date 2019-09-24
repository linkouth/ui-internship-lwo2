/**
 * findFriend - returns the number of people
 * who could possibly be your friend
 *
 * @param {Array<String>} masks
 * @return {Number}
 */
export function findFriend(masks) {
  const red = 'red';
  const blue = 'blue';
  let count = 0;
  for (let i = 0; i < masks.length; i++) {
    if (masks[i] === red && masks[i - 1] === blue && masks[i + 1] === blue) {
      count++;
    } else if (masks[i] === red && masks[i + 1] === blue &&
      masks[i + 2] === blue) {
      count++;
    } else if (masks[i] === red && masks[i - 1] === blue &&
      masks[i - 2] === blue) {
      count++;
    }
  }
  return count;
}
