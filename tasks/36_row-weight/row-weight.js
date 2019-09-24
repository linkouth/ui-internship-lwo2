/**
 * rowWeights - return a new array of two integers,
 * where the first one is the total weight of team 1,
 * and the second one is the total weight of team 2
 *
 * @param {Array<Number>} peopleArray
 * @return {Array<Number>}
 */
export function rowWeights(peopleArray) {
  let firstTeam = [];
  let secondTeam = [];
  peopleArray.forEach((value, index) => {
    if ((index + 1) % 2 === 0) {
      secondTeam.push(value);
    } else {
      firstTeam.push(value);
    }
  }
  );

  return [
    firstTeam.reduce((acc, val) => acc + val, 0),
    secondTeam.reduce((acc, val) => acc + val, 0),
  ];
}
