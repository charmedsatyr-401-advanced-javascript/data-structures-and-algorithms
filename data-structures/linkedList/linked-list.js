'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  // Within your LinkedList class, include a head property. Upon
  // instantiation, an empty Linked List should be created.
  constructor() {
    // This object should be aware of a default empty value assigned to
    // `head` when the linked list is instantiated.
    this.head = null;
  }
  // Define a method called `insert` which takes any value as an argument
  // and adds a new node with that value to the `head` of the list with
  // an O(1) Time performance.
  insert(val) {
    const node = new Node(val); // create a new node
    node.next = this.head; // assign the new node's pointer to the current head
    this.head = node; // reassign the ll's head to the new node
    // N.B.: I read the instructions as adding a node to the head and updating the
    // `head` flag, but to add something to the end, you'd just iterate through the nodes'
    // `next` properties until you found `null`, then add your new node there with a `next`
    // value of `null`
  }
  // Define a method called `includes` which takes any value as an argument
  // and returns a boolean result depending on whether that value exists as
  // a Node’s value somewhere within the list.
  includes(val) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Define a method called `print` which takes in no arguments and returns
  // a collection all of the current Node values in the Linked List.
  print() {
    const collection = {}; // Collection will be an object with keys corresponding
    // to the node's 0-based position in the linked list
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      collection[i] = currentNode.data;
      i++;
      currentNode = currentNode.next;
    }
    return collection;
  }
}

module.exports = { Node, LinkedList };
