'use strict';

const fizzBuzzTree = tree => {
  let root = tree.root;
  if (!root) {
    return null;
  }

  if (root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'FizzBuzz';
  } else if (root.value % 3 === 0) {
    root.value = 'Fizz';
  } else if (root.value % 5 === 0) {
    root.value = 'Buzz';
  }
  if (root.left) {
    this.fizzBuzzTree(root.left);
  }
  if (root.right) {
    this.fizzBuzzTree(root.right);
  }
  return tree;
};

module.exports = fizzBuzzTree;
