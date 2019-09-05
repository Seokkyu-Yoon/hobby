/* eslint-disable require-jsdoc */
function solution(relation) {
  let answer = 0;
  const rowSize = relation.length;
  const columnSize = relation[0].length;
  const caseSize = 2 ** columnSize;
  const alreadyUsed = new Array(caseSize).fill(false);
  for (let i = 1; i < caseSize; i += 1) {
    if (alreadyUsed[i]) continue;
    alreadyUsed[i] = true;
    const flags = [...i.toString(2).padStart(columnSize, '0')];
    const checker = new Set();
    for (const row of relation) {
      const text = row.reduce((str, value, index) =>
        flags[index] === '1' ? `${str}${value}` : str
      , '');
      if (checker.has(text)) break;
      checker.add(text);
    }
    if (checker.size < rowSize) continue;
    for (let used = i + 1; used < caseSize; used += 1) {
      if ((used & i) === i) {
        alreadyUsed[used] = true;
      }
    }
    answer += 1;
  }
  return answer;
}

const testCase = [];
testCase.push({
  relation: [
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ],
  result: 2,
});

const runner = () => testCase.forEach(({relation, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(relation);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
