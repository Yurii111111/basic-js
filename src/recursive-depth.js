const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var res = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let subDepth = this.calculateDepth(arr[i]);
        if (subDepth >= res)
          res = subDepth + 1
      }
    }
    return res;
  }
};