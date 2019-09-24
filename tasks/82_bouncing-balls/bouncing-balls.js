/**
 * bouncingBall - returns how many times will the mother see the ball
 * either falling or bouncing in front of the window
 * @example
 * // return 15
 * bouncingBall(30.0, 0.66, 1.5);
 * @param {Number} h - the height of the floor
 * @param {Number} bounce - the ball bounces for (bounce * h) metres
 * @param {Number} window - the height of the window
 * @return {Number}
 */
export function bouncingBall(h, bounce, window) {
  const times = Math.floor(Math.log(window / h) / Math.log(bounce));
  return times * 2 + 1;
}
