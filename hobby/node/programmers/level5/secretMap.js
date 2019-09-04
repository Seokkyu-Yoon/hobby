/* eslint-disable require-jsdoc */
function solution(n, arr1, arr2) {
  return arr1.map((num1, index) => {
    const num2 = arr2[index];
    return (num1 | num2).toString(2)
        .padStart(n, '0')
        .replace(/1/g, '#')
        .replace(/0/g, ' ');
  });
}

const testCase = [];
testCase.push({
  n: 5,
  arr1: [
    9, 20, 28, 18, 11,
  ],
  arr2: [
    30, 1, 21, 17, 28,
  ],
  result: [
    '#####', '# # #', '### #', '#  ##', '#####',
  ],
});
testCase.push({
  n: 6,
  arr1: [
    46, 33, 33, 22, 31, 50,
  ],
  arr2: [
    27, 56, 19, 14, 14, 10,
  ],
  result: [
    '######', '### #', '## ##', ' #### ', ' #####', '### # ',
  ],
});

const runner = () => testCase.forEach(({n, arr1, arr2, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, arr1, arr2);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
