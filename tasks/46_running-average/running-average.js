/**
 * runningAverage - returns a callable function object
 * updating the series with each given value and calculate
 * the current average
 * @example
 * const rAvg = runningAverage();
 * rAvg(10);
 * // return 10
 * rAvg(11);
 * // return 10.5
 * @return {Function}
 */
export function runningAverage() {
  let numbers = [];
  const average = () => {
    let numbersSum = numbers.reduce((acc, val) => acc + val, 0);
    return 1.0 * numbersSum / numbers.length;
  };
  return function(num) {
    numbers.push(num);
    return average();
  };
}
