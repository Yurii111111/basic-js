const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  const month = Date.prototype.getMonth.call(date);

  if (1 < month && month <= 4) {
    return "spring";
  } else if (4 < month && month <= 7) {
    return "summer";
  } else if (7 < month && month <= 10) {
    return "autumn";
  } else if (month === 11 ||
    month === 0 ||
    month === 1) {
    return "winter";
  }
};
