/**
 * class Stack - implements stack data structure
 */
export class Stack {
  constructor() {
    this.size = 0;
    this.last = null;
  }

  /**
   * push - push node with value on the top of the stack
   * @example
   * stack.push(15);
   * @param {*} value
   * @return {StackNode}
   */
  push(value) {
    const node = new StackNode(value, this.last);
    this.last = node;
    this.size++;
    return this.last;
  }

  /**
   * pop - pop node from the top of the stack
   * @example
   * stack.pop();
   * @return {*}
   */
  pop() {
    if (this.last === null) {
      return null;
    }
    const lastNode = this.last;
    this.last = lastNode.prev;
    this.size--;
    return lastNode.value;
  }

  /**
   * isEmpty - returns true if stack is empty, else false
   * @example
   * stack.isEmpty();
   * @return {Boolean}
   */
  isEmpty() {
    return this.size === 0;
  }
}

/**
 * class StackNode - implements stack node
 */
class StackNode {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }
}
