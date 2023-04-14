const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // domains = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];
  const result = {};

  for (const iterator of domains) {
    const partsDomain = iterator.split(".").reverse();

    let key = "";
    for (partDomain of partsDomain) {
      key += "." + partDomain;
      if (result[key]) {
        result[key]++;
      } else {
        result[key] = 1;
      }
    }
  }

  return result;
}
// console.log(getDNSStats());

module.exports = {
  getDNSStats
};
