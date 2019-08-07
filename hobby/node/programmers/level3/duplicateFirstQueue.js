/* eslint-disable require-jsdoc */
function solution(operations) {
  const queue = [];
  operations.forEach((operation) => {
    const [
      operator,
      strValue,
    ] = operation.split(' ');
    const value = Number(strValue);
    if (operator === 'I') {
      queue.push(value);
      return;
    }
    if (value === 1) {
      queue.splice(queue.indexOf(Math.max.apply(null, queue)), 1);
      return;
    }
    if (value === -1) {
      queue.splice(queue.indexOf(Math.min.apply(null, queue)), 1);
    }
  });

  if (queue.length === 0) {
    return [0, 0];
  }
  return [
    Math.max.apply(null, queue),
    Math.min.apply(null, queue),
  ];
}

const testCase = [];
testCase.push({
  operations: [
    'I 16',
    'D 1',
  ],
  result: [0, 0],
});
testCase.push({
  operations: [
    'I 7',
    'I 5',
    'I -5',
    'D -1',
  ],
  result: [7, 5],
});

const runner = () => testCase.forEach(({operations, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(operations);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
