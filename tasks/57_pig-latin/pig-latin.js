/**
 * translatePigLatin - translates the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an
 * English word, moves it to the end of the word and suffixes an "ay"
 * @example
 * // return 'aliforniacay'
 * translatePigLatin("california");
 * @param {String} str
 * @return {String}
 */
export function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[0])) {
    return str + 'way';
  } else {
    let lastConsonantClusterIndex = 0;
    while (!vowels.includes(str[lastConsonantClusterIndex])) {
      lastConsonantClusterIndex++;
    }
    lastConsonantClusterIndex--;
    return str.slice(lastConsonantClusterIndex + 1) +
      str.substring(0, lastConsonantClusterIndex + 1) +
      'ay';
  }
}
