/* eslint-disable require-jsdoc */
function solution(number, k) {
  const holder = [];
  for (const num of number) {
    let prevNum = holder.pop();
    while (prevNum !== undefined && prevNum < num) {
      if (k === 0) break;
      k -= 1;
      prevNum = holder.pop();
    }
    if (prevNum !== undefined) {
      holder.push(prevNum);
    }
    holder.push(num);
  }
  return holder.slice(0, holder.length - k).join('');
}

const testCase = [];
testCase.push({
  number: '1924',
  k: 2,
  answer: '94',
});
testCase.push({
  number: '1231234',
  k: 3,
  answer: '3234',
});
testCase.push({
  number: '4177252841',
  k: 4,
  answer: '775841',
});
testCase.push({
  number: '11111',
  k: 3,
  answer: '11',
});
testCase.push({
  number: '9876594321',
  k: 3,
  answer: '9894321',
});

const runner = () => testCase.forEach(({number, k, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(number, k);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
