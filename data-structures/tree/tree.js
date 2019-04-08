'use strict';

// Create a Node class that has properties
// for the value stored in the node, the left
// child node, and the right child node.
class Node {
  constructor() {
    this.left = null;
    this.data = null;
    this.right = null;
  }
}

// Create a BinaryTree class
// Define a method for each of the depth first
// traversals called preOrder, inOrder, and postOrder
// which returns an array of the values, ordered
// appropriately.
class BinaryTree {
  constructor() {
    //
  }
  preOrder() {
    //
  }

  inOrder() {
    //
  }

  postOrder() {
    //
  }
}

class BinarySearchTree {
  constructor() {}
  // Define a method named `add` that accepts a value,
  // and adds a new node with that value in the correct
  // location in the binary search tree.
  add(val) {
    //
  }
  // Define a method named contains that accepts a value,
  // and returns a boolean indicating whether or not the value
  // is in the tree at least once.
  contains(val) {
    //
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
