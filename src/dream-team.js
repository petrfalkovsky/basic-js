const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const newMembers = members
    .filter((item) => typeof item === "string")
    .map((el) => el.trim())
    .map((el) => el[0])
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLocaleUpperCase();

  return newMembers;
}

module.exports = {
  createDreamTeam
};
