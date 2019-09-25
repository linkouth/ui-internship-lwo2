/**
 * pairElement - the DNA strand is missing the pairing element.
 * Take each character, get its pair, and return the results as
 * a 2d array
 * @example
 * // return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
 * pairElement("ATCGA");
 * @param {String} str
 * @return {Array<Array<String>>}
 */
export function pairElement(str) {
  return str
      .split('')
      .map((element) => [element, getDNAPair(element)]);
}

/**
 * getDNAPair - returns pair of DNA
 * @example
 * // return 'G'
 * getDNAPair('A');
 * @param {String} dna
 * @return {String}
 */
function getDNAPair(dna) {
  switch (dna) {
    case 'A':
      return 'T';
    case 'T':
      return 'A';
    case 'C':
      return 'G';
    case 'G':
      return 'C';
  }
}
