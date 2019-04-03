'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('`PseudoQueue` class', () => {
  it('Can successfully instantiate an empty pseudoqueue', () => {
    const pq = new PseudoQueue();
    expect(pq).toBeDefined();
  });

  it('Can successfully enqueue onto a queue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('a');
    expect(pq.main.top.data).toBe('a');
  });
  it('Can successfully enqueue multiple items into a queue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('a');
    expect(pq.main.top.data).toBe('a');
    pq.enqueue('b');
    expect(pq.main.top.data).toBe('a');
    expect(pq.main.top.next.data).toBe('b');
    pq.enqueue('c');
    expect(pq.main.top.data).toBe('a');
    expect(pq.main.top.next.data).toBe('b');
    expect(pq.main.top.next.next.data).toBe('c');
  });
  it('Can successfully dequeue off of a queue the expected value', () => {
    const pq = new PseudoQueue();
    pq.enqueue('a');
    expect(pq.main.top.data).toBe('a');
    pq.enqueue('b');
    expect(pq.main.top.data).toBe('a');
    expect(pq.main.top.next.data).toBe('b');
    expect(pq.dequeue()).toBe('a');
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const pq = new PseudoQueue();
    pq.enqueue('a');
    pq.enqueue('b');
    pq.enqueue('c');
    pq.enqueue('d');
    expect(pq.main.top.data).toBe('a');
    expect(pq.main.top.next.data).toBe('b');
    expect(pq.main.top.next.next.data).toBe('c');
    expect(pq.main.top.next.next.next.data).toBe('d');
    pq.dequeue();
    pq.dequeue();
    pq.dequeue();
    pq.dequeue();
    expect(pq.main.top).toBeNull();
  });
  it('Does not throw an error on dequeue of an empty pseudoqueue', () => {
    const pq = new PseudoQueue();
    expect(pq.dequeue()).toBeNull();
  });
});
