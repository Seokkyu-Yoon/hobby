/* eslint-disable require-jsdoc */
const re = /\{|\}/g;
const groupMap = (value) => value.replace(re, '').split(',').map(Number);

function getGroups(str) {
  return str.split('},{').map(groupMap);
}

function compare(arrA, arrB) {
  return arrB.length - arrA.length;
}

function notIncludedTo(result) {
  return (value) => !result.includes(value);
}

function getResult(sortedGroup, result = []) {
  if (sortedGroup.length === 0) return result;
  const currGroup = sortedGroup.pop();
  const newValue = currGroup.find(notIncludedTo(result));
  result.push(newValue);
  return getResult(sortedGroup, result);
}

function solution(s) {
  const groups = getGroups(s).sort(compare);
  return getResult(groups);
}

const testCase = [];
testCase.push({
  s: '{{2},{2,1},{2,1,3},{2,1,3,4}}',
  result: [2, 1, 3, 4],
});
testCase.push({
  s: '{{1,2,3},{2,1},{1,2,4,3},{2}}',
  result: [2, 1, 3, 4],
});
testCase.push({
  s: '{{20,111},{111}}',
  result: [111, 20],
});
testCase.push({
  s: '{{123}}',
  result: [123],
});
testCase.push({
  s: '{{4,2,3},{3},{2,3,4,1},{2,3}}',
  result: [3, 2, 4, 1],
});

const runner = () => testCase.forEach(({s, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(s);
    // if answer is object use it
    console.log('  result');
    console.log(myResult);
    console.log('  correct');
    console.log(JSON.stringify(myResult) === JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
