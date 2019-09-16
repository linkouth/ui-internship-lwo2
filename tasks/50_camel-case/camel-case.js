/**
 * String.prototype.camelCase - words must have their first
 * letter capitalized without spaces
 *
 * @return {String}
 */
String.prototype.camelCase = function() {
  const words = this
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join('');
};
