'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree.js');
const { BinaryTree } = require('../../../data-structures/tree/tree.js');

describe('`fizzBuzzTree` function', () => {
  it('should return `null` if the argument `root` is `null`', () => {
    const bt = new BinaryTree();
    expect(fizzBuzzTree(bt)).toBeNull();
  });
  it('should replace the `root` value with the right word if it is divisible by 3, 5, or both', () => {
    const bt = new BinaryTree();
    bt.add(15);
    expect(fizzBuzzTree(bt).root.data).toBe('FizzBuzz');
  });
});
