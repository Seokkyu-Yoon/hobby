/* eslint-disable require-jsdoc */
const reMelody = RegExp(/[A-G]{1}#*/, 'g');
const getDiff = (toValue, fromValue) => Number(toValue) - Number(fromValue);
const getPlayTime = (from, to) => {
  const [
    fromHour,
    fromMin,
  ] = from.split(':');
  const [
    toHour,
    toMin,
  ] = to.split(':');

  const diffHour = getDiff(toHour, fromHour);
  const diffMin = getDiff(toMin, fromMin);
  return 60 * diffHour + diffMin;
};

const getPlayedMelodies = (playTime, melody) => {
  const melodies = melody.match(reMelody);
  const holder = [];
  for (let i = 0; i < playTime; i += 1) {
    holder.push(melodies[i % melodies.length]);
  }
  return holder;
};

const checkContain = (playedMelodies, melodies) => {
  let answer = false;
  for (let i = 0; i < playedMelodies.length - melodies.length + 1; i += 1) {
    if (playedMelodies[i] !== melodies[0]) continue;
    let index = 1;
    while (index < melodies.length) {
      if (playedMelodies[i + index] !== melodies[index]) break;
      index += 1;
    }
    if (index === melodies.length) {
      answer = true;
      break;
    }
  }
  return answer;
};

function solution(m, musicinfos) {
  const melodies = m.match(reMelody);
  const answer = musicinfos.reduce((bucket, str) => {
    const [
      from,
      to,
      title,
      melody,
    ] = str.split(',');

    const playTime = getPlayTime(from, to);
    if (bucket.playTime >= playTime) return bucket;

    const playedMelodies = getPlayedMelodies(playTime, melody);
    const isContain = checkContain(playedMelodies, melodies);

    if (isContain) {
      bucket.playTime = playTime;
      bucket.title = title;
    }
    return bucket;
  }, {playTime: 0, title: '(None)'}).title;

  return answer;
}

const testCase = [];
testCase.push({
  m: 'ABCDEFG',
  musicinfos: [
    '12:00,12:14,HELLO,CDEFGAB',
    '13:00,13:05,WORLD,ABCDEF',
  ],
  answer: 'HELLO',
});
testCase.push({
  m: 'CC#BCC#BCC#BCC#B',
  musicinfos: [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ],
  answer: 'FOO',
});
testCase.push({
  m: 'ABC',
  musicinfos: [
    '12:00,12:14,HELLO,C#DEFGAB',
    '13:00,13:05,WORLD,ABCDEF',
  ],
  answer: 'WORLD',
});

const runner = () => testCase.forEach(({m, musicinfos, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(m, musicinfos);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
