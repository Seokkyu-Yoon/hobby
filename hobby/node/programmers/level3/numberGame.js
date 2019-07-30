/* eslint-disable require-jsdoc */
function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let wins = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= B[i]) {
      B.splice(i, 0, B.pop());
    } else {
      wins += 1;
    }
  }
  return wins;
}

const testCase = [];
testCase.push({
  A: [5, 1, 3, 8],
  B: [2, 2, 6, 8],
  result: 3,
});
testCase.push({
  A: [2, 2, 2, 2],
  B: [1, 1, 1, 1],
  result: 0,
});

const runner = () => testCase.forEach(({A, B, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(A, B);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
