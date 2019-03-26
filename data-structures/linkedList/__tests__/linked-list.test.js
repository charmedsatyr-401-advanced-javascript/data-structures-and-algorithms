'use strict';

const { Node, LinkedList } = require('../linked-list.js');

describe('`LinkedList` class', () => {
  describe('`LinkedList` class instantiation', () => {
    it('Can successfully instantiate an empty linked list', () => {
      const ll = new LinkedList();
      expect(ll).toBeDefined();
      expect(ll.head).toBeNull();
    });
  });
  describe('`insert` method', () => {
    it('Can properly insert into the linked list', () => {
      const ll = new LinkedList();
      ll.insert('a');
      expect(ll.head).toBeInstanceOf(Node);
    });
    it('The head property will properly point to the first node in the linked list', () => {
      const ll = new LinkedList();
      ll.insert('a');
      expect(ll.head.data).toBe('a');
    });
    it('Can properly insert multiple nodes into the linked list', () => {
      const ll = new LinkedList();
      ll.insert('a');
      ll.insert('b');
      ll.insert('c');
      expect(ll.head.data).toBe('c');
      expect(ll.head.next.data).toBe('b');
      expect(ll.head.next.next.data).toBe('a');
    });
  });
  describe('`includes` method', () => {
    it('Will return true when finding a value within the linked list that exists', () => {
      const ll = new LinkedList();
      ll.insert('a');
      const bool = ll.includes('a');
      expect(bool).toBeTruthy();
    });
    it('Will return false when searching for a value in the linked list that does not exist', () => {
      const ll = new LinkedList();
      ll.insert('a');
      const bool = ll.includes('c');
      expect(bool).toBeFalsy();
    });
    it('Can properly return a collection of all the values that exist in the linked list', () => {
      const ll = new LinkedList();
      ll.insert('a');
      ll.insert('b');
      ll.insert('c');
      const collection = ll.print();
      expect(collection).toBeDefined();
      expect(collection).toEqual({ 0: 'c', 1: 'b', 2: 'a' });
    });
  });
  describe('`append` method', () => {
    it('Can successfuly add a node to the end of an empty linked list', () => {
      const ll = new LinkedList();
      ll.append('a');
      expect(ll.head.data).toBe('a');
    });
    it('Can successfully add a node to the end of the linked list', () => {
      const ll = new LinkedList();
      ll.insert('b');
      ll.insert('a');
      ll.append('c');

      let currentNode = ll.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      expect(currentNode.data).toBe('c');
    });
    it('Can successfully add multiple nodes to the end of a linked list', () => {
      const ll = new LinkedList();
      ll.insert('a');
      ll.append('b');
      ll.append('c');

      let currentNode = ll.head;
      expect(currentNode.next.data).toBe('b');

      currentNode = ll.head.next;
      expect(currentNode.next.data).toBe('c');
    });
  });
  describe('`insertBefore` method', () => {
    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
      const ll = new LinkedList();
      ll.append('a');
      ll.append('b');
      ll.append('d');
      ll.insertBefore('d', 'c');
      const middle = ll.head.next;
      const next = middle.next;
      expect(next.data).toBe('c');
    });
    it('Can successfully insert a node before the first node of a linked list', () => {
      const ll = new LinkedList();
      ll.insert('b');
      ll.insertBefore('b', 'a');
      expect(ll.head.data).toBe('a');
    });
  });
  describe('`insertAfter` method', () => {
    it('Can successfully insert after a node in the middle of the linked list', () => {
      const ll = new LinkedList();
      ll.insert('c');
      ll.insert('a');
      ll.insertAfter('a', 'b');
      const head = ll.head;
      expect(head.data).toBe('a');
      const middle = head.next;
      expect(middle.data).toBe('b');
    });
    it('Can successfully insert a node after the last node of the linked list', () => {
      const ll = new LinkedList();
      ll.insert('a');
      ll.insertAfter('a', 'b');
      const last = ll.head.next;
      expect(last.data).toBe('b');
    });
  });
  describe('`kthFromEnd` method', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    it('Should throw an error where `k` is greater than the length of the linked list', () => {
      expect(() => ll.kthFromEnd(100)).toThrow();
    });
    it('Should return a value where `k` and the length of the list are the same', () => {
      expect(ll.kthFromEnd(4)).toBe(1);
    });
    it('Should throw an error where `k` is not a positive integer', () => {
      expect(() => ll.kthFromEnd(-1)).toThrow();
    });

    it('Should return a value where the linked list is of a size 1', () => {
      const nl = new LinkedList();
      nl.append('a');
      expect(nl.kthFromEnd(0)).toBe('a');
    });
    it('Should return a value where `k` is not at the end, but somewhere in the middle of the linked list', () => {
      expect(ll.kthFromEnd(2)).toBe(3);
    });
  });
});
