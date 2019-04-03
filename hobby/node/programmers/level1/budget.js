function solution(d, budget) {
  return (function getSupportable(sortedCost, budget, index = 0) {
    return sortedCost[index] > budget || index === sortedCost.length ?
      index :
      getSupportable(sortedCost, budget - sortedCost[index], index + 1);
  })(d.sort((a, b) => a - b), budget);
}

const testCase = [];
testCase.push({
  d: [1,3,2,5,4],
  budget: 9,
});
testCase.push({
  d: [2,2,3,3],
  budget: 10,
});
const runner = () => testCase.forEach(({d, budget}) => {
  console.log(solution(d, budget));
});

module.exports = runner;
