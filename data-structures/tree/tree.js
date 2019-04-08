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
  add(val) {
    const q = new Queue();
    let current = this.root;
    if (!current) {
      this.root = new Node(val);
      return;
    }
    q.enqueue(current);
    while (q.peek()) {
      current = q.dequeue();
      if (!current.left) {
        current.left = new Node(val);
        return;
      }
      if (!current.right) {
        current.right = new Node(val);
        return;
      }
      q.enqueue(current.left);
      q.enqueue(current.right);
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
  add(val) {
    let current = this.root;
    if (!current) {
      this.root = new Node(val);
      return;
    }

    while (current) {
      if (val < current.data) {
        if (!current.left) {
          current.left = new Node(val);
          break;
        }
        current = current.left;
      } else if (val >= current.data) {
        if (!current.right) {
          current.right = new Node(val);
          break;
        }
        current = current.right;
      }
    }
  }
  // Define a method named contains that accepts a value,
  // and returns a boolean indicating whether or not the value
  // is in the tree at least once.
  contains(val, current = this.root) {
    if (current.data === val) {
      return true;
    }
    if (current.data > val && current.left) {
      current = current.left;
      return this.contains(val, current);
    }
    if (current.data < val && current.right) {
      current = current.right;
      return this.contains(val, current);
    }
    return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
