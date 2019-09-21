/**
 * convertHTML - Convert the characters &, <, >, " (double quote),
 * and '(apostrophe), in a string to their corresponding HTML entities
 * @example
 * convertHTML("Dolce & Gabbana");
 * // return 'Dolce &amp; Gabbana'
 * @param {String} str
 * @return {String}
 */
export function convertHTML(str) {
  return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
}
