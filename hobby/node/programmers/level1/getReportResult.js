class User {
  constructor() {
    this.reporters = new Set();
    this.reporteds = new Set();
    this.banned = false;
  }

  report(userReported, k) {
    this.reporteds.add(userReported);
    userReported.reporters.add(this);
    if (userReported.reporters.size >= k) {
      userReported.banned = true;
    }
  }

  getMails() {
    let result = 0;
    this.reporteds.forEach((user) => {
      result += user.banned;
    });
    return result;
  }
}

function solution(id_list, report, k) {
  const users = id_list.reduce((bucket, id) => {
    bucket[id] = new User();
    return bucket;
  }, {});

  report.forEach((rep) => {
    const [reporter, reported] = rep.split(' ');
    const userReported = users[reported];
    const userReporter = users[reporter];
    userReporter.report(userReported, k);
  });

  return Object.values(users).map((user) => user.getMails());
}

const testCase = [];
testCase.push({
  id_list: ['muzi', 'frodo', 'apeach', 'neo'],
  report: ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  k: 2,
  result: [2, 1, 1, 0],
});
testCase.push({
  id_list: ['con', 'ryan'],
  report: ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
  k: 3,
  result: [0, 0],
});

function test() {
  testCase.forEach(({
    id_list, report, k, result,
  }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(id_list, report, k);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
