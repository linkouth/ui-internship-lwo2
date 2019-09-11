/**
 * rot13Encoder - returns ROT13 encoded string
 *
 * @param {String} str
 * @return {String}
 */
export function rot13Encoder(str) {
  let cipheredString = '';
  for (const char of str) {
    if (char.match(/[A-M]/)) {
      cipheredString += String.fromCharCode(char.charCodeAt() + 13);
    } else if (char.match(/[N-Z]/)) {
      cipheredString += String.fromCharCode(char.charCodeAt() - 13);
    } else {
      cipheredString += char;
    }
  }
  return cipheredString;
}
