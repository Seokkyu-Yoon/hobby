/* eslint-disable require-jsdoc */
const decomposeNumber = (number) => {
  if (number === 0) return [0];
  const decomposed = [];
  let currNumber = number;
  while (currNumber > 0) {
    decomposed.unshift(currNumber % 10);
    currNumber = Math.floor(currNumber / 10);
  }
  return decomposed;
};

const solution = (numbers) => {
  const result = numbers.sort((a, b) => {
    const decompA = decomposeNumber(a);
    const decompB = decomposeNumber(b);
    for (let i = 0; i < 4; i++) {
      const aVal = decompA[i];
      const bVal = decompB[i];
      if (aVal === undefined && bVal === undefined) return 0;
      if (aVal === undefined) {
        const bEl = decompB.slice(i).find((bEl) => bEl !== decompA[0]);
        if (bEl === undefined) return bVal - decompA[i - 1];
        return bEl - decompA[0];
      }
      if (bVal === undefined) {
        const aEl = decompA.slice(i).find((aEl) => aEl !== decompB[0]);
        if (aEl === undefined) return decompB[i - 1] - aVal;
        return decompB[0] - aEl;
      }
      if (aVal !== bVal) {
        return bVal - aVal;
      }
    }
  }).join('');
  if (result.startsWith('0')) return '0';
  return result;
};

const testCase = [];
testCase.push({
  numbers: [
    6, 10, 2,
  ],
  answer: '6210',
});
testCase.push({
  numbers: [
    3, 30, 34, 5, 9,
  ],
  answer: '9534330',
});
testCase.push({
  numbers: [
    0, 0, 0, 0,
  ],
  answer: '0',
});
testCase.push({
  numbers: [
    190, 1, 1, 100,
  ],
  answer: '19011100',
});
testCase.push({
  numbers: [
    0, 0, 1000, 0,
  ],
  answer: '1000000',
});
testCase.push({
  numbers: [
    0, 1000, 0, 0,
  ],
  answer: '1000000',
});
testCase.push({
  numbers: [
    1000, 0, 0, 0,
  ],
  answer: '1000000',
});
testCase.push({
  numbers: [
    12, 121,
  ],
  answer: '12121',
});
testCase.push({
  numbers: [
    21, 212,
  ],
  answer: '21221',
});
testCase.push({
  numbers: [
    40, 403,
  ],
  answer: '40403',
});
testCase.push({
  numbers: [
    40, 405,
  ],
  answer: '40540',
});
testCase.push({
  numbers: [
    40, 404,
  ],
  answer: '40440',
});
testCase.push({
  numbers: [
    2, 22, 223,
  ],
  answer: '223222',
});
testCase.push({
  numbers: [
    41, 415,
  ],
  answer: '41541',
});
testCase.push({
  numbers: [
    2, 22,
  ],
  answer: '222',
});
testCase.push({
  numbers: [
    70, 0, 0, 0,
  ],
  answer: '70000',
});

const runner = () => testCase.forEach(({numbers, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(numbers);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
