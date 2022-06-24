/* eslint-disable no-console */
class Store {
  constructor() {
    this.score = 0;
    this.memo = [-1];
  }

  set({ score, memo }) {
    if (score <= 0) return;
    if (score < this.score) return;
    if (score > this.score) {
      this.score = score;
      this.memo = memo;
      return;
    }
    for (let i = 10; i >= 0; i -= 1) {
      if (memo[i] > this.memo[i]) {
        this.score = score;
        this.memo = memo;
        return;
      }
      if (memo[i] < this.memo[i]) return;
    }
  }
}

function solution(n, info, store = new Store(), memo = [], acc = 0, i = 0) {
  if (i === 10) {
    memo.push(n - acc);
    const score = memo.reduce((accScore, paper, idx) => {
      const s = 10 - idx;
      if (paper > info[idx]) return accScore + s;
      if (info[idx]) return accScore - s;
      return accScore;
    }, 0);
    store.set({
      score,
      memo,
    });
    return store.memo;
  }

  solution(n, info, store, [...memo, 0], acc, i + 1);
  if (info[i] + 1 <= n - acc) {
    solution(n, info, store, [...memo, info[i] + 1], acc + info[i] + 1, i + 1);
  }
  return store.memo;
}

const testCase = [];
testCase.push({
  n: 5,
  info: [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  result: [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0],
});
testCase.push({
  n: 1,
  info: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  result: [-1],
});
testCase.push({
  n: 9,
  info: [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1],
  result: [1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0],
});
testCase.push({
  n: 10,
  info: [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3],
  result: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2],
});

function test() {
  testCase.forEach(({ n, info, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(n, info);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
