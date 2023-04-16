const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;

  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  const addition =
    options.addition === undefined ? "" : String(options.addition);
  // важен порядок для инициализации
  const repeatedAdditionArr = new Array(additionRepeatTimes).fill(addition);
  const repeatedAddition = repeatedAdditionArr.join(additionSeparator);
  const repeatedArr = new Array(repeatTimes).fill(str + repeatedAddition);

  return repeatedArr.join(separator);
}

module.exports = {
  repeater
};
