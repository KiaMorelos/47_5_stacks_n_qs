/** Stack: where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.stack = [];
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if (!this.stack.length) {
      this.first = val;
      this.last = val;
      this.stack.push(val);
    } else {
      this.last = this.first;
      this.stack.push(val);
      this.first = val;
    }
    this.size += 1;
  }

  /** pop(): remove the item from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.stack.length) throw new Error();
    let removed = this.stack.pop();
    this.size -= 1;
    return removed;
  }

  /** peek(): return the value of the first item in the stack. */

  peek() {
    let itemAtTop = this.stack[this.stack.length - 1];
    return itemAtTop;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.stack.length) return true;
    return false;
  }
}

module.exports = Stack;
