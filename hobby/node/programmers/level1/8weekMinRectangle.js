/* eslint-disable no-console */
function solution(sizes) {
  const rectangle = sizes.reduce((bucket, [w, h]) => {
    const upper = Math.max(bucket.upper, Math.max(w, h));
    const lower = Math.max(bucket.lower, Math.min(w, h));
    return { upper, lower };
  }, { upper: 0, lower: 0 });
  return rectangle.upper * rectangle.lower;
}

const testCase = [];
testCase.push({
  sizes: [[60, 50], [30, 70], [60, 30], [80, 40]],
  result: 4000,
});
testCase.push({
  sizes: [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]],
  result: 120,
});
testCase.push({
  sizes: [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]],
  result: 133,
});

function test() {
  testCase.forEach(({ sizes, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(sizes);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
