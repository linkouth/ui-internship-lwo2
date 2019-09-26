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
    return this._firstName;
  }

  /**
   * getLastName - returns last name
   * @return {String}
   */
  getLastName() {
    return this._lastName;
  }

  /**
   * getFullName - returns full name
   * @return {String}
   */
  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }

  /**
   * setFirstName - set new first name
   * @param {String} first
   * @return {void}
   */
  setFirstName(first) {
    this._firstName = first;
  }

  /**
   * setLastName - set new last name
   * @param {String} last
   * @return {void}
   */
  setLastName(last) {
    this._lastName = last;
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
