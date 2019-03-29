const consoles = {
  log: (log) => console.log(`\x1b[0m${log}\x1b[0m`),
  logRed: (log) => console.log(`\x1b[31m${log}\x1b[0m`),
  logYellow: (log) => console.log(`\x1b[33m${log}\x1b[0m`),
  logGreen: (log) => console.log(`\x1b[32m${log}\x1b[0m`),
};

module.exports = consoles;