/* eslint-disable require-jsdoc */
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let usedCount = 0;
  while (people.length > 0) {
    const maximum = people.shift();
    const minimum = people.pop();
    if (maximum + minimum > limit) {
      people.push(minimum);
    }
    usedCount += 1;
  }
  return usedCount;
}

const testCase = [];
testCase.push({
  people: [
    70, 50, 80, 50,
  ],
  limit: 100,
  answer: 3,
});
testCase.push({
  people: [
    70, 80, 50,
  ],
  limit: 100,
  answer: 3,
});

const runner = () => testCase.forEach(({people, limit, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(people, limit);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
