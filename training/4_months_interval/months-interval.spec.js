// import { monthsInterval } from './months-interval';

xdescribe('monthsInterval', () => {
  test('should handle case: Same month & year', () => {
    expext(monthsInterval(new Date(2017, 0, 1), new Date(2017, 0, 1)))
      .toEqual(['January']);
  });

  test('should handle case: Same month, different year', () => {
    expext(monthsInterval(new Date(2016, 0, 1), new Date(2017, 0, 1)))
      .toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
  });

  test('should handle case: Same month, different year (reversed)', () => {
    expext(monthsInterval(new Date(2017, 0, 1), new Date(2016, 0, 1)))
      .toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
  });

  test('should handle case: Month interval same year', () => {
    expext(monthsInterval(new Date(2017, 3, 1), new Date(2017, 7, 1)))
      .toEqual(['April', 'May', 'June', 'July', 'August']);
  });

  test('should handle case: Month interval same year (reversed)', () => {
    expext(monthsInterval(new Date(2017, 7, 1), new Date(2017, 3, 1)))
      .toEqual(['April', 'May', 'June', 'July', 'August']);
  });

  test('should handle case: Month interval to different year', () => {
    expext(monthsInterval(new Date(2017, 11, 1), new Date(2018, 0, 1)))
      .toEqual(['January', 'December']);
  });

  test('should handle case: Month interval to different year (reversed)', () => {
    expext(monthsInterval(new Date(2018, 0, 1), new Date(2017, 11, 1)))
      .toEqual(['January', 'December']);
  });

  test('should handle case: 2 years interval', () => {
    expext(monthsInterval(new Date(2017, 3, 1), new Date(2019, 3, 1)))
      .toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
  });

  test('should handle case: 2 years interval (reversed)', () => {
    expext(monthsInterval(new Date(2019, 3, 1), new Date(2017, 3, 1)))
      .toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
  });

  test('should handle case: Mutliple years and months interval', () => {
    expext(monthsInterval(new Date(2017, 3, 1), new Date(2043, 9, 1)))
      .toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
  });

  test('should handle case: Mutliple years and months interval (reversed)', () => {
    expext(monthsInterval(new Date(2043, 9, 1), new Date(2017, 3, 1)))
      .toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
  });
});
