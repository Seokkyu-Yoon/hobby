/* eslint-disable require-jsdoc */
function solution(phone_number) {
  const size = phone_number.length - 4;
  const lastNum = phone_number.substring(size);
  const star = (size, i = 0, acc ='') => {
    if (i == size) return acc;
    acc = `${acc}*`;
    return star(size, i + 1, acc);
  };
  return `${star(size)}${lastNum}`;
}

const testCase = [];
testCase.push({
  phone_number: '01033334444',
});
testCase.push({
  phone_number: '027778888',
});

const runner = () => testCase.forEach(({phone_number}) => {
  console.log(solution(phone_number));
});

module.exports = runner;
