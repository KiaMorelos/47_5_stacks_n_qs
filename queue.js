//BASED ON SOLUTION and demos, SEE COMMENTS
/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const node = new Node(val);

    if (!this.first) {
      //if there's nothing in line yet the node is the first and last in line
      this.first = node;
      this.last = node;
    } else {
      // if this is not the first in line then it's the next in line
      this.last.next = node;
      this.last = node;
    }

    this.size += 1; // increase the size of the queue no matter what
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) throw new Error();

    const origFirstInline = this.first;
    if (this.first == this.last) {
      this.last = null; // if this is the only item in the queue then there nothing to queue up next
    }
    this.first = this.first.next; // next item in line is first now
    this.size -= 1; //we removed an item this size goes down by 1
    return origFirstInline.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val; // duh, the first nodes value
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.size) return true; // if the size is 0 clearly it's empty
    return false;
  }
}

module.exports = Queue;
