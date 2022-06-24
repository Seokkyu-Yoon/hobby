/* eslint-disable no-console */
class Car {
  constructor() {
    this.parkingTime = 0;
    this.prevIn = null;
  }

  in(time) {
    const [hours, minutes] = time.split(':').map(Number);
    this.prevIn = hours * 60 + minutes;
  }

  out(time) {
    const [hours, minutes] = time.split(':').map(Number);
    this.parkingTime += hours * 60 + minutes - this.prevIn;
    this.prevIn = null;
  }

  record(time, type) {
    if (type === 'IN') this.in(time);
    else if (type === 'OUT') this.out(time);
    else throw new Error('type is not defined');
  }

  getFee(fees) {
    const [timeBase, feeBase, timeUnit, feeUnit] = fees;
    if (this.prevIn !== null) {
      this.parkingTime += 1439 - this.prevIn;
    }
    return feeBase + Math.ceil(Math.max(this.parkingTime - timeBase, 0) / timeUnit) * feeUnit;
  }
}

function solution(fees, records) {
  const cars = records.reduce((bucket, record) => {
    const [time, carId, type] = record.split(' ');
    bucket[carId] = bucket[carId] || new Car();
    const car = bucket[carId];
    car.record(time, type);
    return bucket;
  }, {});

  const sortedCarIds = Object.keys(cars).sort();
  return sortedCarIds.map((carId) => cars[carId].getFee(fees));
}

const testCase = [];
testCase.push({
  fees: [180, 5000, 10, 600],
  records: ['05:34 5961 IN', '06:00 0000 IN', '06:34 0000 OUT', '07:59 5961 OUT', '07:59 0148 IN', '18:59 0000 IN', '19:09 0148 OUT', '22:59 5961 IN', '23:00 5961 OUT'],
  result: [14600, 34400, 5000],
});
testCase.push({
  fees: [120, 0, 60, 591],
  records: ['16:00 3961 IN', '16:00 0202 IN', '18:00 3961 OUT', '18:00 0202 OUT', '23:58 3961 IN'],
  result: [0, 591],
});
testCase.push({
  fees: [1, 461, 1, 10],
  records: ['00:00 1234 IN'],
  result: [14841],
});

function test() {
  testCase.forEach(({ fees, records, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(fees, records);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
