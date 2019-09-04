/* eslint-disable require-jsdoc */
const MULT = 65536;
const makeSet = (str) => {
  const set = [];
  for (let i = 1; i < str.length; i += 1) {
    const el = `${str[i-1]}${str[i]}`;
    if (el.match(/[a-zA-Z]{2}/)) {
      set.push(el.toUpperCase());
    }
  }
  return set;
};

function solution(str1, str2) {
  const setStr1 = makeSet(str1);
  const setStr2 = makeSet(str2);
  const interCount = setStr1.reduce((acc, el) => {
    const el2Index = setStr2.indexOf(el);
    if (el2Index < 0) return acc;
    setStr2.splice(el2Index, 1);
    return acc + 1;
  }, 0);
  const unionCount = setStr1.length + setStr2.length;

  if (unionCount === 0) return MULT;
  return Math.floor(MULT * interCount / unionCount);
}

const testCase = [];
testCase.push({
  str1: 'FRANCE',
  str2: 'french',
  answer: 16384,
});
testCase.push({
  str1: 'handshake',
  str2: 'shake hands',
  answer: 65536,
});
testCase.push({
  str1: 'aa1+aa2',
  str2: 'AAAA12',
  answer: 43690,
});
testCase.push({
  str1: 'E=M*C^2',
  str2: 'e=m*c^2',
  answer: 65536,
});

const runner = () => testCase.forEach(({str1, str2, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(str1, str2, answer);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
