/**
 * This function is called when check brackets are right.
 * @param {string} s
 * @return {string}
 */
function solution(s) {
  const MAX_INTEGER = 2147483647;
  const MIN_INTEGER = -2147483648;
  const {max, min} = s.split(' ')
      .map((value) => Number(value))
      .reduce(({max, min}, value) => {
        max = value > max ? value : max;
        min = value < min ? value : min;
        return {max, min};
      }, {
        max: MIN_INTEGER,
        min: MAX_INTEGER,
      });
  return [min, max].join(' ');
}

const testCase = [];
testCase.push({
  s: '1 2 3 4',
});
testCase.push({
  s: '-1 -2 -3 -4',
});
testCase.push({
  s: '-1 -1',
});

const runner = () => testCase.forEach(({s}) => {
  console.log(solution(s));
});

module.exports = runner;
