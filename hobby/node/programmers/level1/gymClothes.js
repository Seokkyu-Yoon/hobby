/* eslint-disable no-console */
function getAttendent(students, i = 1) {
  if (i === students.length) return students.reduce((acc, cloth) => (cloth > 0 ? acc + 1 : acc), 0);
  if (students[i] > 0) return getAttendent(students, i + 1);
  if (students[i - 1] === 2) {
    const studentsCopied = [...students];
    studentsCopied[i - 1] -= 1;
    studentsCopied[i] += 1;
    return getAttendent(studentsCopied, i + 1);
  }
  if (students[i + 1] === 2) {
    const studentsCopied = [...students];
    studentsCopied[i + 1] -= 1;
    studentsCopied[i] += 1;
    return getAttendent(studentsCopied, i + 1);
  }
  return getAttendent(students, i + 1);
}

function solution(n, lost, reserve) {
  const students = new Array(n + 1).fill(1);
  students[0] = 0;
  lost.forEach((i) => {
    students[i] -= 1;
  });
  reserve.forEach((i) => {
    students[i] += 1;
  });
  return getAttendent(students);
}

const testCase = [];
testCase.push({
  n: 5,
  lost: [2, 4],
  reserve: [1, 3, 5],
  result: 5,
});
testCase.push({
  n: 5,
  lost: [2, 4],
  reserve: [3],
  result: 4,
});
testCase.push({
  n: 3,
  lost: [3],
  reserve: [1],
  result: 2,
});

function test() {
  testCase.forEach(({
    n, lost, reserve, result,
  }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(n, lost, reserve);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
