/* eslint-disable no-console */
const letterMap = ['A', 'E', 'I', 'O', 'U'];
function getDictionary() {
  const dictionary = {};
  let value = 0;
  const letters = new Array(6).fill('');
  for (let i1 = 0; i1 < 5; i1 += 1) {
    value += 1;
    letters[1] = letterMap[i1];
    dictionary[letters.join('')] = value;
    for (let i2 = 0; i2 < 5; i2 += 1) {
      value += 1;
      letters[2] = letterMap[i2];
      dictionary[letters.join('')] = value;
      for (let i3 = 0; i3 < 5; i3 += 1) {
        value += 1;
        letters[3] = letterMap[i3];
        dictionary[letters.join('')] = value;
        for (let i4 = 0; i4 < 5; i4 += 1) {
          value += 1;
          letters[4] = letterMap[i4];
          dictionary[letters.join('')] = value;
          for (let i5 = 0; i5 < 5; i5 += 1) {
            value += 1;
            letters[5] = letterMap[i5];
            dictionary[letters.join('')] = value;
          }
          letters[5] = '';
        }
        letters[4] = '';
      }
      letters[3] = '';
    }
    letters[2] = '';
  }
  return dictionary;
}

function solution(word) {
  const dictionary = getDictionary();
  return dictionary[word];
}

const testCase = [];
testCase.push({
  word: 'AAAAE',
  result: 6,
});
testCase.push({
  word: 'AAAE',
  result: 10,
});
testCase.push({
  word: 'I',
  result: 1563,
});
testCase.push({
  word: 'EIO',
  result: 1189,
});
testCase.push({
  word: 'UUUUU',
  result: 3905,
});

function test() {
  testCase.forEach(({ word, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(word);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
