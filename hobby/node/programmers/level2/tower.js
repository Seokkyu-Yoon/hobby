/**
 * This function is called when find towers receiver
 * @param {Array<Number>} heights
 * @return {Array<Number>} Tower signal receiver
 */
function solution(heights) {
  const frontTowers = (height, heights, index) => {
    if (index < -1) return 0;
    if (heights[index] > height) return index + 1;
    return frontTowers(height, heights, index - 1);
  };
  const getReviver = (heights, index = 0, acc = []) => {
    if (index === heights.length) return acc;
    acc.push(frontTowers(heights[index], heights, index - 1));
    return getReviver(heights, index + 1, acc);
  };
  return getReviver(heights);
}

const testCase = [];
testCase.push({
  heights: [6, 9, 5, 7, 4],
});
testCase.push({
  heights: [3, 9, 9, 3, 5, 7, 2],
});
testCase.push({
  heights: [1, 5, 3, 6, 7, 6, 5],
});

const runner = () => testCase.forEach(({heights}) => {
  console.log(solution(heights));
});

module.exports = runner;
