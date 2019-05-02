'use strict';

const { BinaryTree } = require('../../../data-structures/tree/tree');
const { treeIntersection } = require('../tree-intersection.js');

describe('`treeIntersection` function', () => {
  it('should print the values shared by two binary trees', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.add('a');
    tree1.add('b');
    tree2.add('c');
    const result = treeIntersection(tree1, tree2);
    const expected = ['b', 'a', 'c'];
    expect(result).toEqual(expected);
  });
  it('should not print duplicate values', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.add(2);
    tree1.add(2);
    tree2.add(2);
    const result = treeIntersection(tree1, tree2);
    const expected = [2];
    expect(result).toEqual(expected);
  });
});
