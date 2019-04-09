'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree.js');

describe('`Node` class', () => {
  it('Can successfully instantiate a node', () => {
    const node = new Node(0);
    expect(node.left).toBeNull();
    expect(node.data).toBe(0);
    expect(node.right).toBeNull();
  });
});

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
  describe('`add` method', () => {
    it('Can successfully add a left child and right child to a single root node', () => {
      const bt = new BinaryTree('a');
      expect(bt.root.data).toBe('a');
      bt.add('b');
      expect(bt.root.left.data).toBe('b');
      bt.add('c');
      expect(bt.root.right.data).toBe('c');

      const b = bt.root.left;
      const c = bt.root.right;

      bt.add('d');
      expect(b.left.data).toBe('d');
      bt.add('e');
      expect(b.right.data).toBe('e');

      bt.add('f');
      expect(c.left.data).toBe('f');
      bt.add('g');
      expect(c.right.data).toBe('g');

      const d = b.left;
      bt.add('h');
      expect(d.left.data).toBe('h');
    });
  });
  describe('`breadthFirstOrder` method', () => {
    it('Returns `null` if the tree is empty', () => {
      const bt = new BinaryTree();
      const result = bt.breadthFirstOrder();
      expect(result).toBeNull();
    });
    it('Can successfully return a collection from a breadth-first order traversal', () => {
      const bt = new BinaryTree();
      const arr = [1, 2, 3, 4, 5, 6];
      arr.forEach(n => bt.add(n));
      const result = bt.breadthFirstOrder();
      expect(result).toEqual(arr);
    });
  });

  describe('`preOrder` method', () => {
    it('Can successfully return a collection from a preorder traversal', () => {
      const bt = new BinaryTree('a');
      bt.add('b');
      bt.add('c');
      expect(bt.preOrder()).toEqual(['a', 'b', 'c']);
      bt.add('d');
      bt.add('e');
      bt.add('f');
      expect(bt.preOrder()).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
    });
  });
  describe('`inOrder` method', () => {
    it('Can successfully return a collection from an inorder traversal', () => {
      const bt = new BinaryTree('a');
      bt.add('b');
      bt.add('c');
      expect(bt.inOrder()).toEqual(['b', 'a', 'c']);
      bt.add('d');
      bt.add('e');
      bt.add('f');
      expect(bt.inOrder()).toEqual(['d', 'b', 'e', 'a', 'f', 'c']);
    });
  });
  describe('`postOrder` method', () => {
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
  describe('`add` method', () => {
    it('Can successfully add a left child and right child to a single root node', () => {
      const bst = new BinarySearchTree(1);
      expect(bst.root.data).toBe(1);
      bst.add(2);
      expect(bst.root.right.data).toBe(2);
      bst.add(3);
      expect(bst.root.right.right.data).toBe(3);
      bst.add(4);
      expect(bst.root.right.right.right.data).toBe(4);
      bst.add(0);
      expect(bst.root.left.data).toBe(0);
    });
  });
  describe('`contains` method', () => {
    it('Returns `true` if a tree contains a `val`', () => {
      const bst = new BinarySearchTree(0);
      bst.add(1);
      bst.add(2);
      bst.add(3);
      bst.add(4);
      bst.add(5);
      bst.add(6);
      bst.add(7);
      expect(bst.contains(7)).toBeTruthy();
    });
    it('Returns `false` if a tree does not contain a val', () => {
      const bst = new BinarySearchTree(0);
      bst.add(1);
      bst.add(2);
      bst.add(3);
      bst.add(4);
      bst.add(5);
      bst.add(6);
      bst.add(7);
      expect(bst.contains(9)).toBeFalsy();
    });
  });
});
