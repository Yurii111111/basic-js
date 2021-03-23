const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor((3600 / turnsSpeed) * turns);
  let result = {
    turns: turns,
    seconds: seconds
  };
  return result;

};
