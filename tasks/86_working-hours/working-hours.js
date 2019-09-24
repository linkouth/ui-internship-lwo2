/**
 * formatWorkingHours - makes a sorted human-friendly schedule of working
 * hours and return it as a string. If the array is empty, it just returns
 * an empty array
 * @example
 * // const INPUT_DATA = [
 * // {
 * //     "day": "sat",
 * //     "from": "10:00",
 * //     "to": "23:00"
 * // },
 * // {
 * //     "day": "mon",
 * //     "from": "11:00",
 * //     "to": "23:00"
 * // },
 * // {
 * //     "day": "tue",
 * //     "from": "11:00",
 * //     "to": "23:00"
 * // },
 * // {
 * //     "day": "wed",
 * //     "from": "11:00",
 * //     "to": "23:00"
 * // },
 * // {
 * //     "day": "thu",
 * //     "from": "12:00",
 * //     "to": "23:00"
 * // },
 * // {
 * //     "day": "fri",
 * //     "from": "12:00",
 * //     "to": "23:00"
 * // },
 * // {
 * //     "day": "sun",
 * //     "from": "11:00",
 * //     "to": "23:00"
 * // }
 * // ];
 * // return [
 * // 'MON - WED: 11:00 - 23:00',
 * // 'THU - FRI: 12:00 - 23:00',
 * // 'SAT: 10:00 - 23:00',
 * // 'SUN: 11:00 - 23:00'
 * // ]
 * formatWorkingHours(INPUT_DATA);
 * @param {Array<Object>} days
 * @return {Array<String>}
 */
export function formatWorkingHours(days) {
  const schedule = days.reduce((schedule, day) => {
    schedule[day.day.toUpperCase()] = `${day.from} - ${day.to}`;
    return schedule;
  }, {});

  const weekByDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
      .map((day) => ({
        dayStart: day,
        dayEnd: '',
        hoursRange: schedule[day],
      }));
  const [day] = weekByDays;
  const result = [day];
  for (let i = 1; i < weekByDays.length; i++) {
    if (result[result.length - 1].hoursRange === weekByDays[i].hoursRange) {
      result[result.length - 1].dayEnd = weekByDays[i].dayStart;
    } else {
      result.push(weekByDays[i]);
    }
  }
  return result
      .filter((item) => item.hoursRange)
      .map((day) => {
        const dayEnd = day.dayEnd === '' ? '' : ` - ${day.dayEnd}`;
        return `${day.dayStart}${dayEnd}: ${day.hoursRange}`;
      });
}
