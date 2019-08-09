/* eslint-disable require-jsdoc */
const solution = (routes) => {
  routes.sort((a, b) => a[0] - b[0]);
  let answer = 1;
  const prevRange = routes[0];
  for (let i = 1; i < routes.length; i++) {
    const currRoute = routes[i];
    if (currRoute[0] > prevRange[1]) {
      answer += 1;
      prevRange[1] = 30001;
    }
    prevRange[0] = Math.max(prevRange[0], currRoute[0]);
    prevRange[1] = Math.min(prevRange[1], currRoute[1]);
  }
  return answer;
};

const testCase = [];
testCase.push({
  routes: [
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ],
  answer: 2,
});

const runner = () => testCase.forEach(({routes, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(routes);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
