'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree.js');

describe('`BinaryTree` class', () => {
  it('Can successfully instantiate an empty tree', () => {
    const bt = new BinaryTree();
    expect(bt).toBeDefined();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const a = new Node('a');
    const bt = new BinaryTree(a);
    expect(bt).toBeDefined();
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const bt = new BinaryTree('a');
    bt.add('b');
    expect(bt.root.data).toBe('a');
    expect(bt.root.left.data).toBe('b');
    bt.add('c');
    expect(bt.root.right.data).toBe('c');
    bt.add('d');
    expect(bt.root.left.left.data).toBe('d');
    bt.add('e');
    expect(bt.root.left.right.data).toBe('e');
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    const bt = new BinaryTree('a');
    bt.add('b');
    bt.add('c');
    expect(bt.preOrder()).toEqual(['a', 'b', 'c']);
    bt.add('d');
    bt.add('e');
    bt.add('f');
    // expect(bt.preOrder()).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    const bt = new BinaryTree('a');
    bt.add('b');
    bt.add('c');
    expect(bt.inOrder()).toEqual(['b', 'a', 'c']);
    bt.add('d');
    bt.add('e');
    bt.add('f');
    // expect(bt.inOrder()).toEqual(['d', 'b', 'e', 'a', 'f', 'c']);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const bt = new BinaryTree('a');
    bt.add('b');
    bt.add('c');
    expect(bt.postOrder()).toEqual(['b', 'c', 'a']);
    bt.add('d');
    bt.add('e');
    bt.add('f');
    // expect(result).toEqual(['d', 'e', 'b', 'f', 'c', 'a']);
  });
});

describe('`BinarySearchTree` class', () => {
  it('Can successfully instantiate an empty tree', () => {
    const bst = new BinarySearchTree();
    expect(bst).toBeDefined();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const bst = new BinarySearchTree(1);
    expect(bst).toBeDefined();
    expect(bst.root.data).toBe(1);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const bst = new BinarySearchTree(1);
    expect(bst.root.data).toBe(1);
    bst.add(2);
    expect(bst.root.right.data).toBe(2);
    bst.add(3);
    expect(bst.root.right.right.data).toBe(3);
  });
});
