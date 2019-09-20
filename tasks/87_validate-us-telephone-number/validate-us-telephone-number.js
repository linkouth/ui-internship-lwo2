/**
 * telephoneCheck - returns true if the passed string is a valid
 * US phone number
 * @example
 * // return true
 * telephoneCheck("1 (555) 555-5555");
 * @param {String} str
 * @return {Boolean}
 */
export function telephoneCheck(str) {
  return str.match(
      /^(1\s?)?(\d{3}|(\(\d{3}\)))[\s-]?\d{3}[\s-]?\d{4}$/
  ) !== null;
}
