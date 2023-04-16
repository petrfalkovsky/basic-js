const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // const names = ["doc", "doc", "image", "doc(1)", "doc"];
  // ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
  const nameCounts = {};
  const uniqueNames = [];

  for (const name of names) {
    if (!nameCounts.hasOwnProperty(name)) {
      nameCounts[name] = 0;
      uniqueNames.push(name);
    } else {
      let newName = name + `(${nameCounts[name] + 1})`;
      while (nameCounts.hasOwnProperty(newName)) {
        newName = name + `(${++nameCounts[name] + 1})`;
      }

      nameCounts[newName] = 0;
      uniqueNames.push(newName);
    }
  }

  return uniqueNames;
}

module.exports = {
  renameFiles
};
