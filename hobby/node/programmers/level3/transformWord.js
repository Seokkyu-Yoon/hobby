/* eslint-disable require-jsdoc */
function solution(begin, target, words) {
  words.unshift(begin);
  const targetIndex = words.indexOf(target);
  if (targetIndex < 0) return 0;
  const wordLength = begin.length;
  const size = words.length;
  const table = new Array(size).fill(null).map(() =>
    new Array(size).fill(false),
  );

  for (let y = 0; y < size; y += 1) {
    const stdWord = words[y];
    for (let x = 0; x < size; x += 1) {
      if (x === y) continue;
      const compareWord = words[x];
      let matchCount = 0;
      for (let i = 0; i < wordLength; i += 1) {
        matchCount += stdWord[i] === compareWord[i] ? 1 : 0;
      }
      if (matchCount + 1 === wordLength) {
        table[y][x] = true;
      }
    }
  }

  const usedIndex = [targetIndex];
  let prevIndexes = [targetIndex];
  let count = 0;
  while (true) {
    const includeIndexes = prevIndexes.reduce((includes, pIndex) => {
      table[pIndex].forEach((value, index) => {
        if (value && !usedIndex.includes(index)) {
          includes.push(index);
          usedIndex.push(index);
        }
      });
      return includes;
    }, []);
    count += 1;
    if (includeIndexes.includes(0)) break;
    if (usedIndex.length === size) return 0;
    prevIndexes = includeIndexes;
  }
  return count;
}

const testCase = [];
testCase.push({
  begin: 'hit',
  target: 'cog',
  words: [
    'hot',
    'dot',
    'dog',
    'lot',
    'log',
    'cog',
  ],
  answer: 4,
});
testCase.push({
  begin: 'hit',
  target: 'cog',
  words: [
    'hot',
    'dot',
    'dog',
    'lot',
    'log',
  ],
  answer: 0,
});

const runner = () => testCase.forEach(({
  begin,
  target,
  words,
  answer,
}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(begin, target, words);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
