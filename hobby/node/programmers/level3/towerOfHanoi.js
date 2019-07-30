/* eslint-disable require-jsdoc */
const getMoveLog = (moveLog) => {
  const prevResult = JSON.parse(JSON.stringify(
      moveLog.map((moves) => moves.map((value) => {
        if (value === 2) return 3;
        if (value === 3) return 2;
        return value;
      }))
  ));
  return [
    ...prevResult,
    [1, 3],
    ...prevResult.map((row) => row.map((value) => {
      if (value === 1) return 2;
      if (value === 2) return 3;
      if (value === 3) return 1;
    })),
  ];
};

function solution(n) {
  if (n === 1) {
    return [[1, 3]];
  }
  let moveLog = [
    [1, 2],
    [1, 3],
    [2, 3],
  ];
  for (let i = 3; i <= n; i++) {
    moveLog = getMoveLog(moveLog);
  }
  return moveLog;
}

const testCase = [];
testCase.push({
  n: 2,
  result: [
    [1, 2],
    [1, 3],
    [2, 3],
  ],
});

const runner = () => testCase.forEach(({n, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
