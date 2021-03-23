const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string') {
    return false;
  }
  let age = parseFloat(sampleActivity);

  if (age > 15 || age <= 0 || isNaN(age)) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / age) / (0.693 / HALF_LIFE_PERIOD))
};
