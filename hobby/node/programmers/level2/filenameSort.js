/* eslint-disable require-jsdoc */
function solution(files) {
  const seperated = files.map((file, index) => {
    const numStart = file.search(/[0-9]/);
    let tailStart = numStart;
    while (++tailStart < numStart + 5) {
      if (isNaN(Number(file[tailStart]))) break;
    }

    const head = file.slice(0, numStart);
    const strNum = file.slice(numStart, tailStart);
    const tail = file.slice(tailStart);

    return {
      index,
      head,
      strNum,
      tail,
      num: Number(strNum)
    };
  });

  seperated.sort((a, b) => {
    const compareHead = a.head.toUpperCase().localeCompare(b.head.toUpperCase());
    if (compareHead !== 0) return compareHead;

    const compareNum = a.num > b.num ? 1 : a.num < b.num ? -1 : 0;
    if (compareNum !== 0) return compareNum;

    return a.index - b.index;
  });


  return seperated.map(({ head, strNum, tail }) => `${head}${strNum}${tail}`);
}


const testCase = [];
testCase.push({
  files: [
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ],
  answer: [
    'img1.png',
    'IMG01.GIF',
    'img02.png',
    'img2.JPG',
    'img10.png',
    'img12.png',
  ],
});

testCase.push({
  files: [
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ],
  answer: [
    'A-10 Thunderbolt II',
    'B-50 Superfortress',
    'F-5 Freedom Fighter',
    'F-14 Tomcat',
  ],
});

const runner = () => testCase.forEach(({ files, answer }, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(files);
    console.log(JSON.stringify(myResult) === JSON.stringify(answer));
    console.log('  result');
    console.log(myResult);
    console.log('  correct');
    console.log(answer);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
