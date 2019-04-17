/**
 * This function is called when get next number
 * @param {Number} n
 * @return {String} Next bigger by rules
 */
function solution(n) {
  const binaryArrN = (function natureToBinaryArr(acc = []) {
    if (n === 0) {
      acc.push(0);
      return acc;
    }
    acc.push(n & 1);
    n = n >> 1;
    return natureToBinaryArr(acc);
  })();

  const findValueIndex = (value, binaryArr, index) => (
    function findIndex(binaryArr, index = 0) {
      return binaryArr[index] === value ?
        index :
        findIndex(binaryArr, index + 1);
    })(binaryArr, index);

  const indexFirst1 = findValueIndex(1, binaryArrN);
  const indexAfter0 = findValueIndex(0, binaryArrN, indexFirst1);

  const binaryNextNumber = [
    binaryArrN.slice(indexFirst1, indexAfter0 - 1),
    new Array(indexFirst1).fill(0),
    [0, 1],
    binaryArrN.slice(indexAfter0 + 1),
  ].filter((arr) => arr.length > 0)
      .join(',').split(',')
      .map((value) => Number(value));

  return (
    function binarayArrToNature(binarryArr, index = 0, base = 1, acc = 0) {
      if (index === binarryArr.length) return acc;
      return binarryArr[index] ?
      binarayArrToNature(binarryArr, index + 1, base + base, acc + base):
      binarayArrToNature(binarryArr, index + 1, base + base, acc);
    })(binaryNextNumber);
}

const testCase = [];
testCase.push({
  n: 78,
});
testCase.push({
  n: 15,
});
testCase.push({
  n: 1000000,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
