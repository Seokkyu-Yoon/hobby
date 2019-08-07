/* eslint-disable require-jsdoc */
function solution(n, stations, w) {
  const bandWidth = 2 * w + 1;
  let from = 1;
  let needs = stations.reduce((acc, position) => {
    if (position - w < from) {
      from = position + w + 1;
      return acc;
    }
    const to = position - w;
    acc += Math.ceil((to - from) / bandWidth);
    from = position + w + 1;
    return acc;
  }, 0);
  if (from <= n) {
    needs += Math.ceil((n - from + 1) / bandWidth);
  }
  return needs;
}

const testCase = [];
testCase.push({
  n: 11,
  stations: [4, 11],
  w: 1,
  answer: 3,
});
testCase.push({
  n: 16,
  stations: [9],
  w: 2,
  answer: 3,
});

const runner = () => testCase.forEach(({n, stations, w, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, stations, w);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
