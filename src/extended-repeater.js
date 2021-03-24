const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  if ("addition" in options) { options.addition = String(options.addition); }
  if (options.repeatTimes == undefined) { options.repeatTimes = 1 }
  if (options.additionRepeatTimes == undefined) { options.additionRepeatTimes = 1 }
  let array = [];
  let additionArray = [];
  let additionResult = '';
  let result = str;
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.addition) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          additionArray.push(options.addition);
        }
        if (options.additionSeparator) {
          additionResult = additionArray.join(`${options.additionSeparator}`);
        } else {
          additionResult = additionArray.join('|');
        }
        additionArray = [];
      }
      array.push(str + additionResult);
    }
    if (options.separator) {
      result = array.join(`${options.separator}`);
    } else {
      result = array.join('+');
    }
    array = [];
  }
  return result;
};
  