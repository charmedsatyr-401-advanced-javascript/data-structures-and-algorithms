'use strict';

const { arraySize, HashTable } = require('../better-hash-table.js');

const { word } = require('faker').random;

const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});

describe('HashTable', () => {
  it('Adding a value to your hashtable results in the value being in the data structure in a linked list', () => {
    // expect.assert(1);
    const h = new HashTable();
    const value = word();
    h.add(value);
    const index = h.hash(value);
    expect(h.table[index].includes(value)).toBeTruthy();
  });
  it('Handle a collision within the hashtable ', () => {
    // expect.assert(2);
    const h = new HashTable();
    const value1 = 'brain';
    const value2 = 'brian';
    h.add(value1);
    h.add(value2);
    const index1 = h.hash(value1);
    const index2 = h.hash(value2);
    expect(index1).toBe(index2);
    expect(h.table[index1].print()).toEqual([value1, value2]);
  });
  it('Returns `true` if a value exists in the hash table', () => {
    // expect.assert(1);
    const h = new HashTable();
    const value = word();
    h.add(value);
    const result = h.has(value);
    expect(result).toBeTruthy();
  });
  it('Returns `false` if a value does not exist in the hash table', () => {
    // expect.assert(1);
    const h = new HashTable();
    const value = word();
    const result = h.has(value);
    expect(result).toBeFalsy();
  });
  it('Will not store a duplicate value', () => {
    // expect.assert(2);
    const h = new HashTable();
    const value = word();
    h.add(value);
    h.add(value);
    const result = h.print();
    expect(log).toHaveBeenCalled();
    expect(result).toHaveLength(1);
  });
  it('Successfully hash a value to an in-range index', () => {
    // expect.assert(2);
    const h = new HashTable();
    const value = word();
    const hash = h.hash(value);
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(arraySize);
  });
});
