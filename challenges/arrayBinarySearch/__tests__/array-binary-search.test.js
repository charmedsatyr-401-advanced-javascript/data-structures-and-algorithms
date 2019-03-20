'use strict';

const binarySearch = require('../array-binary-search.js');

describe('`binarySearch` function', () => {
  const arr = [0, 1, 2, 3, 1];
  it('should return `null` if the first argument is not an array', () => {
    const str = 'str';
    const val = 0;
    expect(binarySearch(str, val)).toBe(null);
  });
  it('should return `null` if the second argument is an Object', () => {
    const val = {};
    expect(binarySearch(arr, val)).toBe(null);
  });
  it('should return `null` if the second argument is an Array', () => {
    const val = ['val'];
    expect(binarySearch(arr, val)).toBe(null);
  });
  it('should return `null` if the second argument is a Function', () => {
    const val = function test() {
      console.log('');
    };
    expect(binarySearch(arr, val)).toBe(null);
  });
  it('should return `null` if the second argument is undefined', () => {
    expect(binarySearch(arr)).toBe(null);
  });
  it('should return the index of the array element that is equal to the search key', () => {
    const val = 2;
    expect(binarySearch(arr, val)).toBe(2);
  });
  it('should return the index of only the first matching element', () => {
    const val = 1;
    expect(binarySearch(arr, val)).toBe(1);
  });
  it('should return -1 if the element is not in the array', () => {
    const val = 100;
    expect(binarySearch(arr, val)).toBe(-1);
  });
});
