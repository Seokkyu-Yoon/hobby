const { existsSync } = require('fs');
const path = require('path');
const console = require('./console');

const argv = process.argv.slice(2);
function getModule(filepath) {
  return require(filepath);
}

new Promise((resolve, reject) => {
  const filepath = path.join(__dirname, argv[0], `${argv[1]}.js`);
  if (existsSync(filepath)) {
    console.logGreen('- Running ...');
    const module = getModule(filepath);
    module();
    return resolve('\n- Ended ...\n');
  }
  return reject(Error('File not exist...'));
})
  .then((result) => console.logYellow(result))
  .catch((err) => console.logRed(err));
