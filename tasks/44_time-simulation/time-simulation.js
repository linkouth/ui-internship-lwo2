/**
 * class SimTime
 */
export class SimTime {
  constructor() {
    this.speed = 1;
    this.currentSimtime = 0;
    this.currentRealtime = 0;
  }

  get() {
    return this.currentSimtime;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  update(currentRealtime) {
    const diff = currentRealtime - this.currentRealtime;
    this.currentRealtime = currentRealtime;
    this.currentSimtime += diff * this.speed;
  }
}
