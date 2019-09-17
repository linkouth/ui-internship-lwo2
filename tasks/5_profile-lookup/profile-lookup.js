const contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin'],
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['Javascript', 'Gaming', 'Foxes'],
  },
];


/**
 * lookupProfile - The function should check if firstName is
 * an actual contact's firstName and the given property (prop)
 * is a property of that contact
 *
 * @param {String} firstName
 * @param {String} prop
 * @return {*}
 */
export function lookupProfile(firstName, prop) {
  let isFirstNameInContacts = false;
  for (const contact of contacts) {
    if (contact.firstName === firstName) {
      isFirstNameInContacts = true;
      if (prop in contact) {
        return contact[prop];
      }
    }
  }
  return isFirstNameInContacts ? 'No such property' : 'No such contact';
}
