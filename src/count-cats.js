const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.reduce((a, b) => a.concat(b));
  let sum = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] == "^^")
      sum.push(i);
  }
  return sum.length
  
};
