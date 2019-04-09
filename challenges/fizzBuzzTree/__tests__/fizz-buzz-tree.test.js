'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree.js');
const { BinaryTree } = require('../../../data-structures/tree/tree.js');

describe('`fizzBuzzTree` function', () => {
  it('should return `null` if the argument is not a tree', () => {
    expect(fizzBuzzTree(0)).toBeNull();
  });
  it('should return an empty tree if the argument `root` is `null`', () => {
    const bt = new BinaryTree();
    expect(fizzBuzzTree(bt)).toEqual(bt);
  });
  it('should replace the `root` value with the right word if it is divisible by 3, 5, or both', () => {
    const bt = new BinaryTree();
    bt.add(15);
    expect(fizzBuzzTree(bt).root.data).toBe('FizzBuzz');
  });
  it('should replace values divisible by `3` with `Fizz`', () => {
    const bt = new BinaryTree();
    bt.add(3);
    bt.add(6);
    bt.add(9);
    bt.add(12);
    bt.add(18);
    bt.add(21);
    bt.add(24);
    const result = fizzBuzzTree(bt);
    expect(result.root.data).toBe('Fizz');
    expect(result.root.left.data).toBe('Fizz');
    expect(result.root.right.data).toBe('Fizz');
    expect(result.root.left.left.data).toBe('Fizz');
    expect(result.root.left.right.data).toBe('Fizz');
    expect(result.root.right.left.data).toBe('Fizz');
    expect(result.root.right.right.data).toBe('Fizz');
  });
  it('should replace values divisible by `5` with `Buzz`', () => {
    const bt = new BinaryTree();
    bt.add(5);
    bt.add(10);
    bt.add(20);
    bt.add(25);
    bt.add(35);
    bt.add(40);
    const result = fizzBuzzTree(bt);
    expect(result.root.data).toBe('Buzz');
    expect(result.root.left.data).toBe('Buzz');
    expect(result.root.right.data).toBe('Buzz');
    expect(result.root.left.left.data).toBe('Buzz');
    expect(result.root.left.right.data).toBe('Buzz');
    expect(result.root.right.left.data).toBe('Buzz');
  });
});
