/* eslint-disable require-jsdoc */
function solution(citations) {
  const n = citations.length;
  for (let h = n; h > 0; h--) {
    const currH = citations.filter((citation) => citation >= h).length;
    if (currH >= h) return h;
  }
  return 0;
}

const testCase = [];
testCase.push({
  citations: [3, 0, 6, 1, 5],
  answer: 3,
});
testCase.push({
  citations: [0, 0, 0, 0, 0],
  answer: 0,
});
testCase.push({
  citations: [5, 5, 5, 5, 5],
  answer: 5,
});

const runner = () => testCase.forEach(({citations, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(citations);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
