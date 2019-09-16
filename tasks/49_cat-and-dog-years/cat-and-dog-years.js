/**
 * humanYearsCatYearsDogYears - returns their respective ages
 * now as humanYears, catYears, dogYears
 *
 * @param {Number} humanYears
 * @return {Array<Number>}
 */
export function humanYearsCatYearsDogYears(humanYears) {
  let result = [1, 15, 15];
  humanYears--;
  if (humanYears > 0) {
    result[0]++;
    result[1] += 9;
    result[2] += 9;
    humanYears--;
  } else {
    return result;
  }
  result[0] += humanYears;
  result[1] += 4 * humanYears;
  result[2] += 5 * humanYears;
  return result;
}
