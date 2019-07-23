/* eslint-disable require-jsdoc */
const invalid = (usedWords, prevWord, currWord) => {
  const lastLetter = [...prevWord].pop();
  return currWord.length <= 1 ||
  currWord[0] !== lastLetter ||
  usedWords.includes(currWord);
};
function solution(n, words) {
  const usedWords = [words[0]];
  for (let index = 1; index < words.length; index++) {
    const prevWord = words[index - 1];
    const currWord = words[index];
    if (invalid(usedWords, prevWord, currWord, index)) {
      return [(index % n) + 1, parseInt(index / n) + 1];
    }
    usedWords.push(currWord);
  }
  return [0, 0];
}

const testCase = [];
testCase.push({
  n: 3,
  words: [
    'tank', 'kick', 'know', 'wheel', 'land',
    'dream', 'mother', 'robot', 'tank',
  ],
  result: [3, 3],
});
testCase.push({
  n: 5,
  words: [
    'hello', 'observe', 'effect', 'take', 'either',
    'recognize', 'encourage', 'ensure', 'establish', 'hang',
    'gather', 'refer', 'reference', 'estimate', 'executive',
  ],
  result: [0, 0],
});
testCase.push({
  n: 2,
  words: [
    'hello', 'one', 'even', 'never', 'now',
    'world', 'draw',
  ],
  result: [1, 3],
});

const runner = () => testCase.forEach(({n, words, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, words);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
