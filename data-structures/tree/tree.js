'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

// Create a Node class that has properties
// for the value stored in the node, the left
// child node, and the right child node.
class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

// Create a BinaryTree class
// Define a method for each of the depth first
// traversals called preOrder, inOrder, and postOrder
// which returns an array of the values, ordered
// appropriately.
class BinaryTree {
  constructor(val) {
    this.root = null;
    if (val) {
      this.root = new Node(val);
    }
  }
  // One strategy for adding a new node to a binary tree
  // is to fill all "child spots from the top down.
  // To do so, we leverage breadth first traversal.
  // During the traversal, we will find the first node
  // that does not have 2 child nodes, and insert the
  // new node as a child.
  // Prefer filling from left to right.
  add(val, root = this.root, q = new Queue()) {
    q.enqueue(root);
    const de = q.dequeue();
    const left = de.left;
    const right = de.right;
    if (left && right) {
      q.enqueue(left);
      q.enqueue(right);
      this.add(val, left, q);
    } else if (!left) {
      root.left = new Node(val);
    } else if (!right) {
      root.right = new Node(val);
    }
  }
  /**
   *   a
   *  / \
   * b   c
   *
   * -> [a, b, c]
   **/
  preOrder(root = this.root, values = []) {
    if (!root) {
      return null;
    }
    // Add root value
    if (root) {
      values.push(root.data);
    }
    if (root.left) {
      this.preOrder(root.left, values);
    }
    if (root.right) {
      this.preOrder(root.right, values);
    }
    return values;
  }

  /**
   *   a
   *  / \
   * b   c
   *
   * -> [b, a, c]
   **/
  inOrder(root = this.root, values = []) {
    if (!root) {
      return null;
    }
    if (root.left) {
      this.inOrder(root.left, values);
    }

    values.push(root.data);

    if (root.right) {
      this.inOrder(root.right, values);
    }
    return values;
  }

  /**
   *   a
   *  / \
   * b   c
   *
   * -> [b, c, a]
   **/
  postOrder(root = this.root, values = []) {
    if (root.left) {
      values.push(...this.inOrder(root.left));
    }
    if (root.right) {
      values.push(...this.inOrder(root.right));
    }
    values.push(root.data);
    return values;
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = null;
    if (val) {
      this.root = new Node(val);
    }
  }
  // Define a method named `add` that accepts a value,
  // and adds a new node with that value in the correct
  // location in the binary search tree.
  add(val, root = this.root) {
    if (!root) {
      return null;
    }
    if (val === root.data) {
      return;
    }
    if (val < root.data) {
      if (!root.left) {
        root.left = new Node(val);
        return;
      } else if (root.left) {
        return this.add(val, root.left);
      }
    }
    if (val >= root.data) {
      if (!root.right) {
        root.right = new Node(val);
        return;
      } else {
        return this.add(val, root.right);
      }
    }
  }
  // Define a method named contains that accepts a value,
  // and returns a boolean indicating whether or not the value
  // is in the tree at least once.
  contains(val) {
    //
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };