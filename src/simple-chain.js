const { NotImplementedError } = require("../extensions/index.js");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));

    return this;
  },

  removeLink(p) {
    if (p - 1 >= 0 && p <= this.chain.length) {
      this.chain.splice(p - 1, 1);
    } else {
      this.chain = [];

      throw new Error("You can't remove incorrect link!");
    }

    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },

  finishChain() {
    let res = this.chain.join(" )~~( ");

    this.chain = [];

    return "( " + res + " )";
  }
};

module.exports = {
  chainMaker
};
