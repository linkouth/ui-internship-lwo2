/**
 * DNAStrand - get the other complementary side
 * @example
 * // return 'TAACG'
 * DNAStrand("ATTGC");
 * @param {String} dna
 * @return {String}
 */
export function DNAStrand(dna) {
  return dna
      .split('')
      .map((element) => getDNAPair(element))
      .join('');
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
