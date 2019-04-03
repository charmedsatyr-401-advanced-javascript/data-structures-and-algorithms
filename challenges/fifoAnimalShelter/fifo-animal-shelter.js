'use strict';

const { Node } = require('../../linkedLists/linked-list.js');

class AnimalShelter {
  constructor() {
    this.back = null;
    this.front = null;
  }
  enqueue(animal) {
    if (animal !== 'dog' && animal !== 'cat') {
      return null;
    }
    const node = new Node(animal);
    node.next = this.back;
    this.back = node;
    if (!this.front) {
      this.front = node;
    }
  }
  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }
  }
}

module.exports = AnimalShelter;
