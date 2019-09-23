/**
 * class LinkedList implements linked list data-structure
 */
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  /**
   * push - push in the end of the list value
   * @example
   * list.push(15);
   * @param {*} value
   * @return {void}
   */
  push(value) {
    const node = new LinkedListNode(value, this.tail);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;
    this.amount++;
  }

  /**
   * pop - pop element from the end of the list
   * @example
   * // return 1
   * list.pop();
   * @return {*}
   */
  pop() {
    if (this.tail === null) {
      return null;
    }
    let lastNode = this.tail;
    this.tail = lastNode.prev;
    this.amount--;
    return lastNode.value;
  }

  /**
   * insertAfter - finds node with value valueToFind and insert new node
   * with value valueToInsert
   * @param {*} valueToFind
   * @param {*} valueToInsert
   * @return {*}
   */
  insertAfter(valueToFind, valueToInsert) {
    let curr = this.head;
    while (curr !== null && curr.value !== valueToFind) {
      curr = curr.next;
    }
    if (curr === null) {
      return false;
    }

    const node = new LinkedListNode(valueToInsert, curr);
    if (curr === this.tail) {
      this.tail = node;
    } else if (curr.next !== null) {
      node.next = curr.next;
      curr.next.prev = node.next;
    }

    curr.next = node;

    this.amount++;
  }

  /**
   * removeItem - finds node with value valueToRemove and remove it
   * @param {*} valueToRemove
   * @return {Boolean}
   */
  removeItem(valueToRemove) {
    let curr = this.head;
    while (curr !== null && curr.value !== valueToRemove) {
      curr = curr.next;
    }
    if (curr === null) {
      return false;
    }
    if (curr === this.head) {
      this.head = curr.next;
    }
    if (curr === this.tail) {
      this.tail = curr.prev;
    }
    if (curr.next !== null) {
      curr.next.prev = curr.prev;
    }
    if (curr.prev !== null) {
      curr.prev.next = curr.next;
    }
    this.amount--;
    return true;
  }

  /**
   * iterate - call callback function (cb) with every node
   * @param {Function} cb
   * @return {void}
   */
  iterate(cb) {
    let curr = this.head;
    while (curr !== null) {
      cb(curr);
      curr = curr.next;
    }
  }
}

/**
 * class LinkedListNode - implements node of linked list
 */
class LinkedListNode {
  constructor(value, prev) {
    this.next = null;
    this.prev = prev;
    this.value = value;
  }
}
