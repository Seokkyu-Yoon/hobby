/* eslint-disable require-jsdoc */
const connect = (connected, computers, i) => {
  computers[i].forEach((value, index) => {
    if (value) {
      const isConnected = connected[index];
      connected[index] = true;
      if (!isConnected) connect(connected, computers, index);
    }
  });
};

function solution(n, computers) {
  const connected = new Array(n).fill(false);
  let networks = 0;
  for (let i = 0; i < n; i++) {
    if (connected[i]) continue;
    networks += 1;
    connect(connected, computers, i);
  }
  return networks;
}

const testCase = [];
testCase.push({
  n: 3,
  computers: [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ],
  answer: 2,
});
testCase.push({
  n: 3,
  computers: [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ],
  answer: 1,
});
testCase.push({
  n: 6,
  computers: [
    [1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 1],
  ],
  answer: 1,
});
testCase.push({
  n: 5,
  computers: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1],
  ],
  answer: 1,
});

const runner = () => testCase.forEach(({n, computers, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, computers);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
