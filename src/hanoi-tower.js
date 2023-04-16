const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {
  // 9, 4308
  // (9, 4308), { turns: 511, seconds: 427 });
  // const disks = 9;
  // const turnsSpeed = 4308;
  const turns = Math.pow(2, disks) - 1;
  const seconds = Math.floor((turns * 3600) / turnsSpeed);

  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
