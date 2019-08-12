/* eslint-disable require-jsdoc */
function solution(budgets = [], M) {
  budgets.sort((a, b) => a - b);
  const budgetSize = budgets.length;
  let low = 1;
  let high = Math.max.apply(null, budgets);
  while (low !== high) {
    const mid = Math.ceil((low + high) / 2);
    let cost = 0;
    const largerIndex = budgets.findIndex((budget) => {
      const result = budget > mid;
      if (!result) {
        cost += budget;
      }
      return result;
    });
    if (largerIndex > -1) {
      cost += (budgetSize - largerIndex) * mid;
    }
    if (cost > M) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return low;
}

const testCase = [];
testCase.push({
  budgets: [
    120,
    110,
    140,
    150,
  ],
  M: 485,
  result: 127,
});
testCase.push({
  budgets: [
    1,
    1,
    1,
    1,
  ],
  M: 485,
  result: 1,
});

const runner = () => testCase.forEach(({budgets, M, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(budgets, M);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
