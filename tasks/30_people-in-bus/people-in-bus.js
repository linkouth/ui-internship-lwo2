/**
 * peopleInBus - return number of people who
 * are still in the bus after the last bus station
 *
 * @param {Array<Array<Number>>} busStops
 * @return {Number}
 */
export function peopleInBus(busStops) {
  return busStops
      .map((busStop) => busStop[0] - busStop[1])
      .reduce((acc, val) => acc + val, 0);
}
