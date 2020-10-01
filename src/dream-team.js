const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.length) {
    let arr = []
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) == 'string') {
        arr.push(members[i]);
      }
    }
    return arr.map(item => item.trim().toUpperCase().slice(0, 1)).sort().join('');
  } else {
    return false;
  }
};
