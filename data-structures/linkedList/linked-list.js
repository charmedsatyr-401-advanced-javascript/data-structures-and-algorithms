'use strict';

class LinkedList {
  // Within your LinkedList class, include a head property. Upon
  // instantiation, an empty Linked List should be created.
  constructor(val) {
    // This object should be aware of a default empty value assigned to
    // `head` when the linked list is instantiated.
    this.head = this.list[0];
    this.list = [];
  }
  // Define a method called `insert` which takes any value as an argument
  // and adds a new node with that value to the `head` of the list with
  // an O(1) Time performance.
  insert(val) {
    this.list[this.list.length] = val;
  }
  // Define a method called `includes` which takes any value as an argument
  // and returns a boolean result depending on whether that value exists as
  // a Node’s value somewhere within the list.
  includes(val) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === val) {
        return true;
      }
    }
    return false;
  }

  // Define a method called `print` which takes in no arguments and returns
  // a collection all of the current Node values in the Linked List.
  print() {
    return this.list;
  }
}

module.exports = LinkedList;
