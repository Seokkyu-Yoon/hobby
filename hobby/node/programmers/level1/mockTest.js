function solution(answers) {
  const giveUpPeople = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scoreBoard = giveUpPeople.reduce((scores, giveUpPerson, personIndex) => {
    scores[personIndex+1] = answers.reduce((score, answer, answerIndex) => {
      score += answer === giveUpPerson[answerIndex % giveUpPerson.length];
      return score;
    }, 0);
    if(scores[personIndex+1] > scores.max) scores.max = scores[personIndex+1];
    return scores;
  }, { max: 0 });

  return Object.keys(scoreBoard)
    .filter((key) => key !== 'max' && scoreBoard[key] === scoreBoard.max)
    .reduce((acc, personIndex) => {
      acc.push(Number(personIndex));
      return acc;
    }, []);
}

const testCase = [];
testCase.push({
  answers: [1,2,3,4,5],
});
testCase.push({
  answers: [1,3,2,4,2],
});

const runner = () => testCase.forEach(({answers}) => {
  console.log(solution(answers));
});

module.exports = runner;
