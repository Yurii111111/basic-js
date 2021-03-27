const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) { throw new Error };
    let regex = /[A-Z]/;
    let el = this.direct == false ? message.toUpperCase().split('').reverse().join('').split(" ").join('') : message.toUpperCase().split(' ').join('');
    let arrayForKey = key.toUpperCase().split('');
    let arrayKey = [];
    for (let c = 0; c < el.length; c++) {
      let letter = el[c].charCodeAt(0)
      let num;
      let result;
      if (arrayForKey[c] && regex.test(el[c])) {
        num = arrayForKey[c].charCodeAt(0) - 65;
        result = num + letter < 91 ? num + letter : num + letter - 26;
        arrayKey.push(String.fromCharCode(result));
      } else if (regex.test(el[c])) {
        num = arrayForKey[c % arrayForKey.length].charCodeAt(0) - 65;
        result = num + letter < 91 ? num + letter : num + letter - 26;
        arrayKey.push(String.fromCharCode(result));
      } else {
        arrayKey.push(el[c]);
      }
    };
    let toSplit = arrayKey.join('');
    let prev = 0;
    let result = [];
    if (this.direct == false) {
      message.split('').reverse().join('').split(' ').forEach(word => {
        result.push(toSplit.substr(prev, word.length));
        prev += word.length;
      })
    } else {
      message.split(' ').forEach(word => {
        result.push(toSplit.substr(prev, word.length));
        prev += word.length;
      })
    }
    return result.join(' ');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) { throw new Error };
    let regex = /[A-Z]/;
    let el = this.direct == false ? encryptedMessage.toUpperCase().split('').reverse().join('').split(" ").join('') : encryptedMessage.toUpperCase().split(' ').join('');
    let arrayForKey = key.toUpperCase().split('');
    let arrayKey = [];
    for (let c = 0; c < el.length; c++) {
      let letter = el[c].charCodeAt(0)
      let num;
      let result;
      if (arrayForKey[c] && regex.test(el[c])) {
        num = arrayForKey[c].charCodeAt(0) - 65;
        result = letter - num > 64 ? letter - num : letter - num + 26;
        arrayKey.push(String.fromCharCode(result));
      } else if (regex.test(el[c])) {
        num = arrayForKey[c % arrayForKey.length].charCodeAt(0) - 65;
        result = letter - num > 64 ? letter - num : letter - num + 26;
        arrayKey.push(String.fromCharCode(result));
      } else {
        arrayKey.push(el[c]);
      }
    };
    let toSplit = arrayKey.join('');
    let prev = 0;
    let result = [];
    if (this.direct == false) {
      encryptedMessage.split('').reverse().join('').split(' ').forEach(word => {
        result.push(toSplit.substr(prev, word.length));
        prev += word.length;
      })
    } else {
      encryptedMessage.split(' ').forEach(word => {
        result.push(toSplit.substr(prev, word.length));
        prev += word.length;
      })
    }
    return result.join(' ');
  }
}

module.exports = VigenereCipheringMachine;
