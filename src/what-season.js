const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // const date = new Date(2020, 02, 31);
  // const date = new Date(2020, 02, 31);
  //  const date = new Date(2150, 7, 21, 18, 36, 41, 841)
  // const date = new Date(2102, 3, 27, 22, 33, 28, 721)
  // const date = 'foo'
  // const date = new Date(2020, 02, 31);
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  if (Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();
  // декабрь, янв, фев
  if (month === 11 || month === 0 || month === 1) {
    return "winter";
    // март, апрел, май
  } else if (month === 2 || month === 3 || month === 4) {
    return "spring";
    // июньб июль, август
  } else if (month === 5 || month === 6 || month === 7) {
    return "summer";
    // сентябрь, окт, ноябрь
  } else if (month === 8 || month === 9 || month === 10) {
    return "autumn" || "fall";
  }
}

module.exports = {
  getSeason
};
