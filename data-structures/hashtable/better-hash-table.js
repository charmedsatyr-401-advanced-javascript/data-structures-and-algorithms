'use strict';

const { LinkedList } = require('../linkedList/linked-list.js');

const arraySize = 1024;

class HashTable {
  constructor() {
    this.table = [];
  }
  add(value) {
    const index = this.hash(value);
    // If no LinkedList
    if (this.table[index]) {
      // Do not add duplicate values
      if (this.table[index].includes(value)) {
        console.log(`DUPLICATE AT INDEX: ${index}, VALUE: ${value}`);
      } else {
        this.table[index].append(value);
      }
    } else {
      // Only create a linked list when you need to store a value.
      // Could be further simplified to only create a linked list
      // when there is a collision.
      this.table[index] = new LinkedList();
      this.table[index].append(value);
    }
  }
  has(value) {
    const index = this.hash(value);
    return this.table[index] && this.table[index].print().length > 0 ? true : false;
  }
  hash(value) {
    value = String(value);
    const charCodes = [];
    for (let i = 0; i < value.length; i++) {
      charCodes.push(value.charCodeAt(i));
    }
    const sum = charCodes.reduce((acc, curr) => acc + curr);
    const product = sum * 599;
    const remainder = product % arraySize;
    return Math.floor(remainder);
  }
  print() {
    const values = [];
    const table = this.table.map(t => t);
    table.forEach(t => values.push(...t.print()));
    return values;
  }
}

module.exports = { arraySize, HashTable };
