/**
 * updateRecords - updates property prop of object with id on value
 * @example
 * let collection = {
 * //  "album": "Slippery When Wet",
 * //  "artist": "Bon Jovi",
 * //      "2548": {
 * //    "tracks": [
 * //      "Let It Rock",
 * //      "You Give Love a Bad Name"
 * //    ]
 * //  },
 * //  "2468": {
 * //    "album": "1999",
 * //    "artist": "Prince",
 * //    "tracks": [
 * //      "1999",
 * //      "Little Red Corvette"
 * //    ]
 * //  },
 * //  "1245": {
 * //    "artist": "Robert Palmer",
 * //    "tracks": [ ]
 * //  },
 * //  "5439": {
 * //    "album": "ABBA Gold"
 * //  }
 * //};
 * updateRecords(5439, "artist", "ABBA");
 * // return
 * //{
 * //  "album": "Slippery When Wet",
 * //  "artist": "Bon Jovi",
 * //      "2548": {
 * //    "tracks": [
 * //      "Let It Rock",
 * //      "You Give Love a Bad Name"
 * //    ]
 * //  },
 * //  "2468": {
 * //    "album": "1999",
 * //    "artist": "Prince",
 * //    "tracks": [
 * //      "1999",
 * //      "Little Red Corvette"
 * //    ]
 * //  },
 * //  "1245": {
 * //    "artist": "Robert Palmer",
 * //    "tracks": [ ]
 * //  },
 * //  "5439": {
 * //    "album": "ABBA Gold",
 * //    "artist": "ABBA"
 * //  }
 * //};
 * @param {Number} id
 * @param {String} prop
 * @param {String} value
 * @return {Array<Object>}
 */
export function updateRecords(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else {
    if (prop !== 'tracks') {
      collection[id][prop] = value;
    } else {
      if (prop in collection[id]) {
        collection[id][prop].push(value);
      } else {
        collection[id][prop] = [value];
      }
    }
  }
  return collection;
}

let collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};
