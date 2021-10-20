/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  setPrev(prev) {
    this.prev = prev;
  }

  setNext(next) {
    this.next = next;
  }

  delete() {
    const { prev, next } = this;
    if (prev !== null) {
      this.prev.setNext(this.next);
    }
    if (next !== null) {
      this.next.setPrev(this.prev);
    }
  }

  restore() {
    const { prev, next } = this;
    if (prev !== null) {
      this.prev.setNext(this);
    }
    if (next !== null) {
      this.next.setPrev(this);
    }
  }
}

class LinkedList {
  constructor(n, k) {
    this.idx = k;
    this.stack = [];
    this.root = new Node(null);
    let nodePrev = this.root;
    let cursor = nodePrev;
    for (let i = 0; i < n; i += 1) {
      const nodeCurr = new Node(i);
      nodeCurr.setPrev(nodePrev);
      nodePrev.setNext(nodeCurr);
      nodePrev = nodeCurr;
      if (i === k) cursor = nodeCurr;
    }
    this.cursor = cursor;
  }

  cursorUp(value) {
    for (let i = 0; i < value; i += 1) {
      this.cursor = this.cursor.prev;
    }
  }

  cursorDown(value) {
    for (let i = 0; i < value; i += 1) {
      this.cursor = this.cursor.next;
    }
  }

  remove() {
    const nodeCurr = this.cursor;
    this.stack.push(nodeCurr);
    this.cursor.delete();
    this.cursor = this.cursor.next === null ? this.cursor.prev : this.cursor.next;
  }

  restore() {
    this.stack.pop().restore();
  }

  getResult(n) {
    const result = new Array(n).fill('X');
    let nodeCurr = this.root;
    while (nodeCurr.next !== null) {
      nodeCurr = nodeCurr.next;
      result[nodeCurr.value] = 'O';
    }
    return result.join('');
  }
}

function solution(n, k, cmd) {
  const linkedList = new LinkedList(n, k);
  cmd.forEach((command) => {
    const [action, strValue] = command.split(' ');
    if (action === 'C') {
      linkedList.remove();
      return;
    }
    if (action === 'Z') {
      linkedList.restore();
      return;
    }

    const value = Number(strValue);
    if (action === 'U') {
      linkedList.cursorUp(value);
      return;
    }
    if (action === 'D') {
      linkedList.cursorDown(value);
      return;
    }
    throw new Error('Action is undefined');
  });
  return linkedList.getResult(n);
}

const testCase = [];
testCase.push({
  n: 8,
  k: 2,
  cmd: ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'],
  result: 'OOOOXOOO',
});
testCase.push({
  n: 8,
  k: 2,
  cmd: ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C'],
  result: 'OOXOXOOO',
});

function test() {
  testCase.forEach(({
    n, k, cmd, result,
  }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(n, k, cmd);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
