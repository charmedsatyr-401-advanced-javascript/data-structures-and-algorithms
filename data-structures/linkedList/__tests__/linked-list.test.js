'use strict';

const { Node, LinkedList } = require('../linked-list.js');

describe('LinkedList', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
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
