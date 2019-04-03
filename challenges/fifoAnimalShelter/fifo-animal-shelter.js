'use strict';

const { Node } = require('../../data-structures/linkedList/linked-list.js');

class AnimalShelter {
  constructor() {
    this.back = null;
    this.front = null;
  }
  /**
   * enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
   * @function
   * @name enqueue
   * @params animal {string} Must be 'dog' or 'cat'
   **/
  enqueue(animal) {
    if (animal !== 'dog' && animal !== 'cat') {
      return null;
    }
    const node = new Node(animal);
    if (this.back) {
      this.back.next = node;
    }
    this.back = node;
    if (!this.front) {
      this.front = node;
    }
  }
  /**
   * dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.
   * @function
   * @name dequeue
   * @params pref {string} The preferred animal, either 'dog' or 'cat'
   **/
  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }
    let current = this.front;

    // No nodes
    if (!current) {
      return null;
    }
    // One node
    if (!current.next) {
      if (current.data === pref) {
        this.front = null;
        this.back = null;
        return current.data;
      } else {
        return null;
      }
    }

    // Front === pref
    if (current.data === pref) {
      this.front = current.next;
      return current.data;
    }

    // Iteration
    let target;
    // Mark the front initial, move it
    this.enqueue(current.data);
    this.back.initial = true;
    this.front = current.next;
    current = this.front;

    while (current.next) {
      this.enqueue(current.data);
      this.front = current.next;
      current = this.front;
      if (current.data === pref) {
        this.front = current.next;
        target = current;
        current = this.front;
        break;
      }
    }
    // Cycle through to restore initial order
    while (!current.initial) {
      this.enqueue(current.data);
      current = this.front.next;
      this.front = current;
    }
    delete this.front.initial;
    return target.data;
  }
}

module.exports = AnimalShelter;
