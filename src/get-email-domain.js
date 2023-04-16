const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // const email = 'example-indeed@strange-example.com';
  // 'very.unusual.@.unusual.com@usual.com'
  lastDog = email.lastIndexOf("@");
  domain = email.slice(lastDog + 1);

  return domain;
}

module.exports = {
  getEmailDomain
};
