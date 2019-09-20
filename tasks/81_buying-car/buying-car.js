/**
 * nbMonths - returns how many months will it take him to save up
 * enough money to buy the car he wants, and how much money will
 * he have left over
 * @example
 * // return [6, 766]
 * nbMonths(2000, 8000, 1000, 1.5);
 * @param {Number} startPriceOld
 * @param {Number} startPriceNew
 * @param {Number} savingsPerMonth
 * @param {Number} percentLossByMonth
 * @return {Array<Number>}
 */
export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  if (startPriceOld > startPriceNew) {
    return [0, startPriceOld - startPriceNew];
  }
  let monthCount = 0;
  let currNewCarPrice = startPriceNew;
  let currOldCarPrice = startPriceOld;
  let currPercentLossByMonth = percentLossByMonth;
  while (currNewCarPrice > currOldCarPrice + monthCount * savingsPerMonth) {
    monthCount++;
    if (monthCount % 2 === 0) {
      currPercentLossByMonth += 0.5;
    }
    currNewCarPrice = Math.floor(currNewCarPrice *
      (1 - currPercentLossByMonth / 100));
    currOldCarPrice = Math.floor(currOldCarPrice *
      (1 - currPercentLossByMonth / 100));
  }
  return [
    monthCount,
    currOldCarPrice + monthCount * savingsPerMonth - currNewCarPrice,
  ];
}
