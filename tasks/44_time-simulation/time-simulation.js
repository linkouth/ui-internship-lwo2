/**
 * SimTime - simulate time and mess with it
 */
export function SimTime() {
  this.speed = 1;
  this.currentSimtime = 0;
  this.currentRealtime = 0;
}

/**
 * get - returns the current time withing the simulation
 * @example
 * sim.get();
 * //return 10
 * @return {Number} time withing the simulation
 */
SimTime.prototype.get = function() {
  return this.currentSimtime;
};

/**
 * setSpeed - the simulation speed is set to new_speed
 * @example
 * sim.setSpeed(3);
 * // void
 * @param {Number} newSpeed
 * @return {void}
 */
SimTime.prototype.setSpeed = function(newSpeed) {
  this.speed = newSpeed;
};

/**
 * update - set realtime, calculates the change in
 * realtime, and therefore the change in simulated time
 * @example
 * sim.update(15);
 * // void
 * @param {Number} currentRealtime
 * @return {void}
 */
SimTime.prototype.update = function(currentRealtime) {
  const diff = currentRealtime - this.currentRealtime;
  this.currentRealtime = currentRealtime;
  this.currentSimtime += diff * this.speed;
};

