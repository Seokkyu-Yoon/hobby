/* eslint-disable no-console */
const dayMap = [
  'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT',
];
function getFormattedDay(day) {
  return dayMap[day];
}
function solution(a, b) {
  const strMonth = String(a).padStart(2, '0');
  const strDate = String(b).padStart(2, '0');
  const date = new Date(`2016-${strMonth}-${strDate}`);
  return getFormattedDay(date.getDay());
}

function solution1(a, b) {
  const dates = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 5; // 2016-01-01 is Friday
  for (let month = 1; month < a; month += 1) {
    day = (day + dates[month]) % 7;
  }
  day = (day + b - 1) % 7;
  return getFormattedDay(day);
}
const testCase = [];
testCase.push({
  a: 5,
  b: 24,
  result: 'TUE',
});
testCase.push({
  a: 2,
  b: 29,
  result: 'MON',
});

function test() {
  testCase.forEach(({ a, b, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(a, b);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
