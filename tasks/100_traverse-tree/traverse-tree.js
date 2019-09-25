/**
 * traverseTree - traverses an n-niry tree and calls callback for
 * each of tree nodes passing node value as an argument
 * @example
 * // outputs to the log: 1 2 99 100 ...
 * const tree = {
 * //  value: 1,
 * //  children: [
 * //      { value: 2, children: [] },
 * //      { value: 99, children: [{ value: 100, children: [] }]
 * //  }]
 * //};
 * // function callback(argument) { console.log(argument); }
 * traverseTree(tree, callback);
 * @param {Array<Object>} tree
 * @param {Function} callback
 * @return {void}
 */
export function traverseTree(tree, callback) {
  callback(tree);
  for (const node of tree.children) {
    traverseTree(node, callback);
  }
}
