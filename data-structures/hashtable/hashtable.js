'use strict';

const { LinkedList } = require('../linkedList/linked-list.js');

const arraySize = 1024;

class Hashtable {
  constructor() {
    this.table = Array(arraySize).fill(new LinkedList());
  }
  add(key, value) {
    const index = this.hash(key);
    this.table[index].append(value);
  }
  get(key) {
    const index = this.hash(key);
    const result = this.table[index].print();
    return result.length > 0 ? result : null;
  }
  contains(key) {
    const index = this.hash(key);
    return this.table[index].print.length > 0 ? true : false;
  }
  hash(key) {
    const charCodes = [];
    for (let i = 0; i < key.length; i++) {
      charCodes.push(key.charCodeAt(i));
    }
    const sum = charCodes.reduce((acc, curr) => acc + curr);
    const product = sum * 599;
    const remainder = product % arraySize;
    return Math.floor(remainder);
  }
}

module.exports = { arraySize, Hashtable };
