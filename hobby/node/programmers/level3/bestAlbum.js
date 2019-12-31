/* eslint-disable require-jsdoc */
function solution(genres, plays) {
  const records = genres.map((genre, id) => ({
    id,
    genre,
    play: plays[id],
  })).sort((a, b) => b.play - a.play);

  const mergedRecords = [...new Set(genres)].map((genreSet) =>
    records.filter(({genre}) =>
      genre === genreSet,
    ).reduce((acc, {id, play}) => {
      acc.play += play;
      acc.albums.push(id);
      return acc;
    }, {genre: genreSet, play: 0, albums: []}),
  ).sort((a, b) => b.play - a.play);

  return mergedRecords.reduce((bucket, {albums}) => {
    albums.splice(0, 2).forEach((id) => {
      bucket.push(id);
    });
    return bucket;
  }, []);
}

const testCase = [];
testCase.push({
  genres: [
    'classic', 'pop', 'classic', 'classic', 'pop',
  ],
  plays: [
    500, 600, 150, 800, 2500,
  ],
  answer: [
    4, 1, 3, 0,
  ],
});

const runner = () => testCase.forEach(({genres, plays, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(genres, plays);
    console.log(`  result: ${myResult}\tcorrect:${answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
