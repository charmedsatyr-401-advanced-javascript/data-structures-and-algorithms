'use strict';

const { arraySize, Hashtable } = require('../hashtable.js');

const { word } = require('faker').random;

describe('Hashtable', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const h = new Hashtable();
    const key = word();
    const value = word();
    h.add(key, value);
    const index = h.hash(key);
    expect(h.table[index].includes(value)).toBeTruthy();
  });
  it('Retrieving based on a key returns the value stored', () => {
    const h = new Hashtable();
    const key = word();
    const value = word();
    h.add(key, value);
    const result = h.get(key);
    expect(result.includes(value)).toBeTruthy();
  });
  it('Successfully returns null for a key that does not exist in the hashtable ', () => {
    const h = new Hashtable();
    const key = word();
    const result = h.get(key);
    expect(result).toBeNull();
  });
  it('Successfully handle a collision within the hashtable ', () => {
    const h = new Hashtable();
    const key = word();
    const value = word();
    h.add(key, value);
    h.add(key, value);
    const result = h.get(key);
    expect(result.length).toBe(2);
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {
    const h = new Hashtable();
    const key = word();
    const value = word();
    h.add(key, value);
    h.add(key, value);
    const result = h.get(key);
    expect(result.length).toBe(2);
  });
  it('Successfully hash a key to an in-range value ', () => {
    const h = new Hashtable();
    const key = word();
    const hash = h.hash(key);
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(arraySize);
  });
});
