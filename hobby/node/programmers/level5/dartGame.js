/* eslint-disable require-jsdoc */
function getOperIndex(str) {
  return str.indexOf('S') + str.indexOf('D') + str.indexOf('T') + 2;
}
function solution(dartResult) {
  const splitedResult = dartResult.match(/[0-9]+[SDT]+[\*\#]*/g);
  const dartInfo = splitedResult.map((str) => {
    const operIndex = getOperIndex(str);
    const score = Number(str.slice(0, operIndex));
    const oper = str[operIndex];
    const bonus = str[operIndex + 1];

    return {score, oper, bonus};
  });

  const scores = dartInfo.reduce((bucket, {score, oper, bonus}, index) => {
    let value = 0;
    if (oper === 'S') value += score;
    if (oper === 'D') value += score ** 2;
    if (oper === 'T') value += score ** 3;
    if (bonus === '#') value *= -1;
    if (bonus === '*') {
      value *= 2;
      if (index !== 0) bucket[index - 1] *= 2;
    }
    bucket.push(value);
    return bucket;
  }, []);
  return scores.reduce((acc, score) => acc + score);
}

const testCase = [];
testCase.push({
  dartResult: '1S2D*3T',
  answer: 37,
});
testCase.push({
  dartResult: '1D2S#10S',
  answer: 9,
});
testCase.push({
  dartResult: '1D2S0T',
  answer: 3,
});
testCase.push({
  dartResult: '1S*2T*3S',
  answer: 23,
});
testCase.push({
  dartResult: '1D#2S*3S',
  answer: 5,
});
testCase.push({
  dartResult: '1T2D3D#',
  answer: -4,
});
testCase.push({
  dartResult: '1D2S3T',
  answer: 59,
});
testCase.push({
  dartResult: '10S*10S*10S*',
  answer: 100,
});

const runner = () => testCase.forEach(({dartResult, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(dartResult);
    console.log('  result');
    console.log(myResult);
    console.log('  correct');
    console.log(myResult === answer);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
