/* eslint-disable require-jsdoc */
function solution(record) {
  const datas = record.reduce((bucket, rec) => {
    const [
      action,
      id,
      name,
    ] = rec.split(' ');
    if (action === 'Change') {
      bucket.users[id] = name;
      return bucket;
    }
    let message = '님이 나갔습니다.';
    if (action === 'Enter') {
      bucket.users[id] = name;
      message = '님이 들어왔습니다.';
    }
    bucket.logs.push({
      id,
      message,
    });
    return bucket;
  }, {logs: [], users: {}});

  return datas.logs.map(({id, message}) => {
    return `${datas.users[id]}${message}`;
  });
}

const testCase = [];
testCase.push({
  record: [
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ],
  result: [
    'Prodo님이 들어왔습니다.',
    'Ryan님이 들어왔습니다.',
    'Prodo님이 나갔습니다.',
    'Prodo님이 들어왔습니다.',
  ],
});

const runner = () => testCase.forEach(({record, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(record);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
