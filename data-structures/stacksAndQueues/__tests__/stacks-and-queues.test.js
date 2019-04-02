'use strict';

const { Stack, Queue } = require('../stacks-and-queues.js');

describe('`Stack` class', () => {
  it('Can successfully instantiate an empty stack', () => {
    const st = new Stack();
    expect(st).toBeDefined();
  });
  it('Can successfully `push` onto a stack', () => {
    const st = new Stack();
    st.push('a');
    expect(st.top.data).toBe('a');
  });
  it('Can successfully `push` multiple nodes onto a stack', () => {
    const st = new Stack();
    st.push('a');
    st.push('b');
    st.push('c');
    expect(st.top.data).toBe('c');
    expect(st.top.next.data).toBe('b');
    expect(st.top.next.next.data).toBe('a');
  });
  it('Can successfully `pop` off the stack', () => {
    const st = new Stack();
    st.push('a');
    st.push('b');
    st.push('c');
    expect(st.top.data).toBe('c');
    st.pop();
    expect(st.top.data).toBe('b');
  });
  it('Can successfully empty a stack after multiple `pop`s.', () => {
    const st = new Stack();
    st.push('a');
    st.push('b');
    st.push('c');
    expect(st.top.data).toBe('c');
    st.pop();
    expect(st.top.data).toBe('b');
    st.pop();
    expect(st.top.data).toBe('a');
    st.pop();
    expect(st.top).toBeNull();
  });
  it('Can successfully peek the next item on the stack.', () => {
    const st = new Stack();
    st.push('a');
    expect(st.peek()).toBe('a');
  });
});

describe('`Queue` class', () => {
  it('Can successfully instantiate an empty queue', () => {
    const q = new Queue();
    expect(q).toBeDefined();
  });
  it('Can successfully enqueue onto a queue', () => {
    const q = new Queue();
    q.enqueue('a');
    expect(q.back.data).toBe('a');
  });
  it('Can successfully enqueue multiple items into a queue', () => {
    const q = new Queue();
    q.enqueue('a');
    expect(q.back.data).toBe('a');
    q.enqueue('b');
    expect(q.back.data).toBe('b');
    q.enqueue('c');
    expect(q.back.data).toBe('c');
  });
  it('Can successfully dequeue off of a queue the expected value', () => {
    const q = new Queue();
    q.enqueue('a');
    expect(q.back.data).toBe('a');
    q.enqueue('b');
    expect(q.back.data).toBe('b');
    expect(q.front.data).toBe('a');
    q.dequeue();
    expect(q.front.data).toBe('b');
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const q = new Queue();
    q.enqueue('a');
    expect(q.back.data).toBe('a');
    expect(q.peek()).toBe('a');
    q.enqueue('b');
    expect(q.back.data).toBe('b');
    expect(q.peek()).toBe('a');
    q.enqueue('c');
    expect(q.back.data).toBe('c');
    expect(q.peek()).toBe('a');
    q.enqueue('d');
    expect(q.back.data).toBe('d');
    expect(q.peek()).toBe('a');
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const q = new Queue();
    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');
    q.enqueue('d');
    expect(q.back.data).toBe('d');
    expect(q.peek()).toBe('a');
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.back).toBeNull();
    expect(q.peek()).toBeNull();
  });
});
