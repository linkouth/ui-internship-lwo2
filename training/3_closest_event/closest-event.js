/**
 * closestEvent - takes array of objects containing some events and
 * return the name of the event that is closest to that date
 * @example
 * // return 'Challenger Spacecraft Explodes'
 * // const events = [
 * // { date: '2005-08-23', name: 'Hurricane Katrina' },
 * // { date: '2004-12-26', name: 'Indian Ocean Earthquake and
 * // Tsunami Disaster' },
 * // { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
 * // { date: '2009-01-15', name: 'Hudson River Plane Crash' },
 * // { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
 * // { date: '2001-09-11', name: 'September 11 Attacks' },
 * // { date: '1986-04-26', name: 'Chernobyl Nuclear Disaster' },
 * // { date: '2011-03-16', name: 'Fukushima Nuclear Disaster' }
 * // ];
 * closestEvent(events, new Date(1970, 0, 1));
 * @param {Array<Object>} events
 * @param {Date} date
 * @return {String}
 */
export function closestEvent(events, date) {
  let [nearestEvent] = events;
  for (const event of events) {
    const eventDate = new Date(Date.parse(event.date));
    const nearestEventDate = new Date(Date.parse(nearestEvent.date));
    if (Math.abs(date - eventDate) < Math.abs(date - nearestEventDate)) {
      nearestEvent = event;
    }
  }
  return nearestEvent.name;
}
