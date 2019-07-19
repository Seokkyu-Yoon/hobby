/* eslint-disable require-jsdoc */
const cal = (x, y, arr1, arr2) =>
  arr1[y].reduce((acc, arr1Val, index) => {
    return acc + arr1Val * arr2[index][x];
  }, 0);

function solution(arr1, arr2) {
  const sizeY = arr1.length;
  const sizeX = arr2[0].length;
  const result = [];
  for (let y = 0; y < sizeY; y++) {
    result.push([]);
    for (let x = 0; x < sizeX; x++) {
      result[y].push(cal(x, y, arr1, arr2));
    }
  }
  return result;
}

const testCase = [];
testCase.push({
  arr1: [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  arr2: [
    [3, 3],
    [3, 3],
  ],
  answer: [
    [15, 15],
    [15, 15],
    [15, 15],
  ],
});
testCase.push({
  arr1: [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  arr2: [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ],
  answer: [
    [22, 22, 11],
    [36, 28, 18],
    [29, 20, 14],
  ],
});

const runner = () => testCase.forEach(({arr1, arr2, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(arr1, arr2);
    console.log(`  result: ${myResult}\n  answer:${answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
