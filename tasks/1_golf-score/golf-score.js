/**
 * GOLF_SCORES - enum, encounteres different nicknames
 */
export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!'
}

/**
 * golf-score - returns nickname, depending on 
 * how far above or below par your strokes are.
 *
 * @param {Number} par
 * @param {Number} strokes
 * @return {String}
 */
export function golfScore(par, strokes) {
  if (strokes === 1) {
      return GOLF_SCORES.HOLE_IN_ONE;
  }
  if (strokes <= par - 2) {
      return GOLF_SCORES.EAGLE;
  }
  switch (strokes) {
      case par - 1: 
          return GOLF_SCORES.BIRDIE;
          break;
      case par:
          return GOLF_SCORES.PAR;
          break;
      case par + 1:
          return GOLF_SCORES.BOGEY;
          break;
      case par + 2:
          return GOLF_SCORES.DOUBLE_BOGEY;
          break;
  }
  if (strokes >= par + 3) {
      return GOLF_SCORES.GO_HOME;
  }
}
  