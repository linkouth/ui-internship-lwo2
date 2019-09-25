/**
 * class Person
 */
export class Person {
  /**
   * Constructor takes full name
   * @param {String} fullName
   */
  constructor(fullName) {
    this.setFullName(fullName);
  }

  /**
   * getFirstName - returns first name
   * @return {String}
   */
  getFirstName() {
    return this.firstName;
  }

  /**
   * getLastName - returns last name
   * @return {String}
   */
  getLastName() {
    return this.lastName;
  }

  /**
   * getFullName - returns full name
   * @return {String}
   */
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  /**
   * setFirstName - set new first name
   * @param {String} first
   * @return {void}
   */
  setFirstName(first) {
    this.firstName = first;
  }

  /**
   * setLastName - set new last name
   * @param {String} last
   * @return {void}
   */
  setLastName(last) {
    this.lastName = last;
  }

  /**
   * setFullName - set full name (first and last)
   * @param {String} firstAndLast
   * @return {void}
   */
  setFullName(firstAndLast) {
    const [firstName, secondName] = firstAndLast.split(' ');
    this.setFirstName(firstName);
    this.setLastName(secondName);
  }
}
