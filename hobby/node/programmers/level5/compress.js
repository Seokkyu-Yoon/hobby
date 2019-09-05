/* eslint-disable require-jsdoc */
const initDict = () => {
  const dict = {length: 0, words: {}};
  for (let i = 65; i <= 90; i += 1) {
    dict.words[String.fromCharCode(i)] = i - 64;
    dict.length += 1;
  }
  return dict;
};

function solution(msg) {
  const dict = initDict();
  const answer = [];
  let step = 0;
  while (step < msg.length) {
    let word = msg[step];
    while (dict.words[word]) {
      step += 1;
      if (!msg[step]) {
        word = `${word} `;
        break;
      }
      word = `${word}${msg[step]}`;
    }
    answer.push(dict.words[word.slice(0, -1)]);
    dict.length += 1;
    dict.words[word] = dict.length;
  }
  return answer;
}

const testCase = [];
testCase.push({
  msg: 'KAKAO',
  answer: [11, 1, 27, 15],
});
testCase.push({
  msg: 'TOBEORNOTTOBEORTOBEORNOT',
  answer: [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34],
});
testCase.push({
  msg: 'ABABABABABABABAB',
  answer: [1, 2, 27, 29, 28, 31, 30],
});

const runner = () => testCase.forEach(({msg, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(msg);
    console.log('  result');
    console.log(myResult);
    console.log('  correct');
    console.log(answer);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
