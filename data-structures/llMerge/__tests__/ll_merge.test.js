'use strict';

const mergeLists = require('../ll-merge.js');
const { LinkedList } = require('../../linkedList/linked-list.js');

describe('`mergeLists` function', () => {
  describe('“Happy Path” - Expected outcome', () => {
    it('should merge two linked lists of equal, non-zero lengths', () => {
      const a = new LinkedList();
      a.append(1);
      a.append(3);
      const b = new LinkedList();
      b.append(2);
      b.append(4);
      const z = mergeLists(a, b);
      expect(z.data).toBe(1);
      expect(z.next.data).toBe(2);
      expect(z.next.next.data).toBe(3);
      expect(z.next.next.next.data).toBe(4);
    });
    it('should merge two lengthy lists when `a` is longer than `b`', () => {
      const a = new LinkedList();
      a.append(1);
      a.append(3);
      a.append(5);
      const b = new LinkedList();
      b.append(2);
      b.append(4);
      const z = mergeLists(a, b);
      expect(z.data).toBe(1);
      expect(z.next.data).toBe(2);
      expect(z.next.next.data).toBe(3);
    });
    it('should merge two lengthy lists when `b` is longer than `a`', () => {
      const a = new LinkedList();
      a.append(1);
      a.append(3);
      const b = new LinkedList();
      b.append(2);
      b.append(4);
      b.append(5);
      const z = mergeLists(a, b);
      expect(z.data).toBe(1);
      expect(z.next.data).toBe(2);
      expect(z.next.next.data).toBe(3);
    });
  });
  describe('Expected failure', () => {
    it('should throw an error if `a` and `b` are not objects', () => {
      const b = new LinkedList();
      expect(() => mergeLists(' ', b)).toThrow();
    });
  });

  describe('Edge Case (if applicable/obvious)', () => {
    it('should return a single node if `a` has a length of `1` and `b` has a length of `0`', () => {
      const a = new LinkedList();
      a.append(1);
      const b = new LinkedList();
      const z = mergeLists(a, b);
      expect(z.data).toBe(1);
      expect(z.next).toBeNull();
    });
    it('should return a single node if `b` has a length of `1` and `a` has a length of `0`', () => {
      const a = new LinkedList();
      const b = new LinkedList();
      b.append(1);
      const z = mergeLists(a, b);
      expect(z.data).toBe(1);
      expect(z.next).toBeNull();
    });
    it('should return `null` if both arguments have `0` length', () => {
      const a = new LinkedList();
      const b = new LinkedList();
      const z = mergeLists(a, b);
      expect(z).toBeNull();
    });
  });
});
