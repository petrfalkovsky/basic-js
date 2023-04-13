const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // const n = 222219;
  let arr = Array.from(n.toString()).map(Number);
  let maxN = -Infinity;

  arr.forEach((_, index) => {
    let newNs = arr.slice();
    newNs.splice(index, 1);
    let newN = Number(newNs.join(""));
    if (newN > maxN) {
      maxN = newN;
    }
  });
  return maxN;
}

// console.log(deleteDigit());

module.exports = {
  deleteDigit
};
