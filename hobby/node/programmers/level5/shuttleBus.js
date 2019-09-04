/* eslint-disable require-jsdoc */
const FIRST_ARRIVE = 540;
function minToTimetable(min) {
  const valueHour = Math.floor(min / 60);
  const valueMin = min % 60;
  const strHour = String(valueHour).padStart(2, '0');
  const strMin = String(valueMin).padStart(2, '0');
  return `${strHour}:${strMin}`;
}
function solution(n, t, m, timetable) {
  const arrivalTimes = timetable.map((time) => {
    const [hour, min] = time.split(':');
    return 60 * Number(hour) + Number(min);
  });
  arrivalTimes.sort((a, b) => a - b);
  let passengerIndex = 0;
  const arrivals = new Array(n).fill(FIRST_ARRIVE).map((base, index) => {
    const arrive = base + t * index;
    const passengers = [];
    while (
      passengerIndex < arrivalTimes.length &&
      arrivalTimes[passengerIndex] <= arrive
    ) {
      passengers.push(arrivalTimes[passengerIndex]);
      passengerIndex += 1;
      if (passengers.length === m) break;
    }

    return {
      arrive,
      passengers,
    };
  });

  const {arrive, passengers} = arrivals.pop();
  if (passengers.length < m) return minToTimetable(arrive);
  return minToTimetable(passengers.pop() - 1);
}

const testCase = [];
testCase.push({
  n: 1,
  t: 1,
  m: 5,
  timetable: `08:00, 08:01, 08:02, 08:03`.split(', '),
  answer: '09:00',
});
testCase.push({
  n: 2,
  t: 10,
  m: 2,
  timetable: `09:10, 09:09, 08:00`.split(', '),
  answer: '09:09',
});
testCase.push({
  n: 2,
  t: 1,
  m: 2,
  timetable: `09:00, 09:00, 09:00, 09:00`.split(', '),
  answer: '08:59',
});
testCase.push({
  n: 1,
  t: 1,
  m: 5,
  timetable: `00:01, 00:01, 00:01, 00:01, 00:01`.split(', '),
  answer: '00:00',
});
testCase.push({
  n: 1,
  t: 1,
  m: 1,
  timetable: `23:59`.split(', '),
  answer: '09:00',
});
testCase.push({
  n: 10,
  t: 60,
  m: 45,
  timetable: `23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59, 23:59`.split(', '),
  answer: '18:00',
});

const runner = () => testCase.forEach(({n, t, m, timetable, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, t, m, timetable);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
