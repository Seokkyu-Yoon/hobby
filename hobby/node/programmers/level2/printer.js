/**
 * This function is called when find location job end
 * @param {Array<Number>} priorities
 * @param {Number} location
 * @return {Number} Location job end squence
 */
function solution(priorities, location) {
  const getMyPrint = (count = 1) => {
    const maxIndex = priorities
        .reduce((maxIndex, value, index, arr) =>
        value > arr[maxIndex] ? index : maxIndex, 0);
    if (maxIndex === location) return count;
    location = location - maxIndex;
    location = location < 1 ?
      location + priorities.length - 1 :
      location - 1;
    priorities = priorities
        .slice(maxIndex + 1)
        .concat(priorities.slice(0, maxIndex));
    return getMyPrint(count + 1);
  };
  return getMyPrint();
}

const testCase = [];
testCase.push({
  priorities: [2, 1, 3, 2],
  location: 2,
});
testCase.push({
  priorities: [1, 1, 9, 1, 1, 1],
  location: 0,
});

const runner = () => testCase.forEach(({priorities, location}) => {
  console.log(solution(priorities, location));
});

module.exports = runner;
