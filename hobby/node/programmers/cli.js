const {existsSync} = require('fs');
const console = require('./console');
const argv = process.argv.slice(2);

new Promise((resolve, reject) => {
  const file = `${__dirname}/${argv[0]}/${argv[1]}.js`;
  if(existsSync(file)) {
    console.logGreen('- Running ...');
    require(file)();
    return resolve('\n- Ended ...\n');
  }
  return reject('File not exist...');
}).then((result) => console.logYellow(result)).catch((err) => console.logRed(err));