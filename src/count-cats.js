const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix = [].concat(...matrix).filter(a => a == "^^").length;
};
