const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number') {
      this.chain = [];
      throw new Error();
    }

    position--;
    if (position < 0 || this.getLength() <= position) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = '';

    for (let i = 0; i < this.getLength(); i++) {
      string += `( ${this.chain[i]} )`;

      if (i < this.getLength() - 1) {
        string += '~~';
      }
    }

    this.chain = [];
    return string;
  }
};

module.exports = chainMaker;