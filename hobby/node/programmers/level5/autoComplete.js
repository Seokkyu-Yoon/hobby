/* eslint-disable require-jsdoc */
class Dict {
  constructor() {
    this.count = 0;
  }
}
function solution(words) {
  const dict = words.reduce((dict, word) => {
    let currDict = dict;
    const letters = [...word];
    letters.forEach((letter) => {
      currDict.count += 1;
      if (!currDict[letter]) {
        currDict[letter] = new Dict();
      }
      currDict = currDict[letter];
    });
    currDict.count += 1;
    return dict;
  }, new Dict());

  const types = words.reduce((bucket, word) => {
    let acc = 0;
    let currDict = dict;
    const letters = [...word];
    letters.some((letter) => {
      acc += 1;
      const nextDict = currDict[letter];
      if (nextDict.count === 1) {
        return true;
      }
      currDict = nextDict;
      return false;
    });

    bucket.push(acc);
    return bucket;
  }, []);

  return types.reduce((acc, value) => acc + value);
}

const testCase = [];
testCase.push({
  words: [
    'go',
    'gone',
    'guild',
  ],
  result: 7,
});
testCase.push({
  words: [
    'abc',
    'def',
    'ghi',
    'jklm',
  ],
  result: 4,
});
testCase.push({
  words: [
    'word',
    'war',
    'warrior',
    'world',
  ],
  result: 15,
});

const runner = () => testCase.forEach(({words, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(words);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
