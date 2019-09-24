/**
 * removeSiblings - takes HTML element adn removes all siblings
 * @example
 * removeSiblings($node);
 * @param {Object} node
 * @return {void}
 */
export function removeSiblings(node) {
  const siblings = node.parentElement.children;
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] !== node) {
      siblings[i].remove();
      i--;
    }
  }
}
