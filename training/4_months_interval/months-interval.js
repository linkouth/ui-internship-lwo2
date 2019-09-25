/**
 * monthsInterval - returns the names of the months that are present
 * between them (inclusive)
 * @example
 * // return ['January', 'February', 'March']
 * // const date1 = new Date(2017, 0, 1);
 * // const date2 = new Date(2017, 2, 1);
 * monthsInterval(date1, date2);
 * @param {*} date1
 * @param {*} date2
 * @return {Array<String>}
 */
export function monthsInterval(date1, date2) {
  let monthNumbers = [];
  const startDate = min(date1, date2);
  const endDate = max(date1, date2);
  if (endDate.getFullYear() !== startDate.getFullYear()) {
    for (let i = startDate.getMonth(); i < 12; i++) {
      monthNumbers.push(i);
    }
    for (let i = 0; i <= endDate.getMonth(); i++) {
      monthNumbers.push(i);
    }
  } else {
    for (let i = startDate.getMonth(); i <= endDate.getMonth(); i++) {
      monthNumbers.push(i);
    }
  }
  monthNumbers = monthNumbers
      .filter((value, index) => monthNumbers.indexOf(value) === index)
      .sort((a, b) => a - b);
  return monthNumbers.map((number) => monthNames[number]);
}

const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

/**
 * max - returns max of two dates
 * // return date2
 * const date1 = new Date(2017, 3, 1);
 * const date2 = new Date(2017, 7, 1);
 * min(date1, date2);
 * @param {Date} date1
 * @param {Date} date2
 * @return {Date}
 */
function max(date1, date2) {
  if (date1.getFullYear() !== date2.getFullYear()) {
    return date1.getFullYear() > date2.getFullYear() ? date1 : date2;
  } else if (date1.getMonth() !== date2.getMonth()) {
    return date1.getMonth() > date2.getMonth() ? date1 : date2;
  } else {
    return date1.getDay() > date2.getDay() ? date1 : date2;
  }
}

/**
 * min - returns min of two dates
 * @example
 * // return date1
 * const date1 = new Date(2017, 3, 1);
 * const date2 = new Date(2017, 7, 1);
 * min(date1, date2);
 * @param {Date} date1
 * @param {Date} date2
 * @return {Date}
 */
function min(date1, date2) {
  if (date1.getFullYear() !== date2.getFullYear()) {
    return date1.getFullYear() < date2.getFullYear() ?
    date1 : date2;
  } else if (date1.getMonth() !== date2.getMonth()) {
    return date1.getMonth() < date2.getMonth() ? date1 : date2;
  } else {
    return date1.getDay() < date2.getDay() ? date1 : date2;
  }
}
