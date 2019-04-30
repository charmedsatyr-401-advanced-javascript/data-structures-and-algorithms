'use strict';

const { HashTable } = require('../../data-structures/hashtable/better-hash-table');

// Write a function that accepts a lengthy string parameter.
const treeIntersection = (tree1, tree2) => {
  /*
   * Iterate through both trees
   * add values to a hash table
   * that doesn't accept duplicates
   * print the hash table
   */
  const h = new HashTable();
  const addPreOrder = root => {
    if (!root) {
      return null;
    }
    // Add root value
    if (root) {
      h.add(root.data);
    }
    if (root.left) {
      addPreOrder(root.left);
    }
    if (root.right) {
      addPreOrder(root.right);
    }
  };
  addPreOrder(tree1.root);
  addPreOrder(tree2.root);
  return h.print();
};

module.exports = { treeIntersection };
