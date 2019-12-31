/* eslint-disable require-jsdoc */
function solution(arr1, arr2) {
  return ((arr1, arr2) => (
    (function addLine(x = 0, acc = []) {
      if (x == arr1.length) return acc;
      acc.push(
          (function add(y = 0, acc = []) {
            if (y == arr1[x].length) return acc;
            acc.push(arr1[x][y] + arr2[x][y]);
            return add(y + 1, acc);
          })(),
      );
      return addLine(x + 1, acc);
    })()
  ))(arr1, arr2);
}

const testCase = [];
testCase.push({
  arr: [[1, 2], [2, 3]],
  arr2: [[3, 4], [5, 6]],
});
testCase.push({
  arr1: [[1], [2]],
  arr2: [[3], [4]],
});

const runner = () => testCase.forEach(({arr1, arr2}) => {
  console.log(solution(arr1, arr2));
});

module.exports = runner;
