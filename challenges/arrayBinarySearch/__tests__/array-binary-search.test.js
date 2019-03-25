'use strict';

const binarySearch = require('../array-binary-search.js');

describe('`binarySearch` function', () => {
  const arr = [0, 1, 2, 3, 4];
  describe('input validation', () => {
    it('should return `-1` if the first argument is not an array', () => {
      const str = 'str';
      const val = 0;
      expect(binarySearch(str, val)).toBe(-1);
    });
    it('should return `-1` if the second argument is an Object', () => {
      const val = {};
      expect(binarySearch(arr, val)).toBe(-1);
    });
    it('should return `-1` if the second argument is an Array', () => {
      const val = ['val'];
      expect(binarySearch(arr, val)).toBe(-1);
    });
    it('should return `-1` if the second argument is a Function', () => {
      const val = function() {};
      expect(binarySearch(arr, val)).toBe(-1);
    });
    it('should return `-1` if the second argument is undefined', () => {
      expect(binarySearch(arr)).toBe(-1);
    });
  });
  describe('output validation', () => {
    it('should return the index of the array element that is equal to the search key if the element is in the middle of the array', () => {
      const val = 2;
      expect(binarySearch(arr, val)).toBe(2);
    });
    // Test implemented after documentation was submitted:
    // Search pattern goes as follows:
    // mid = 2
    // high = 4
    // low = 0
    // No match!
    // ----------
    // high = 1
    // mid = 0 (Math.floor)
    // low = 0
    // No match!
    // ----------
    // The function erroneously returns -1.
    // See corresponding update in array-binary-search.js
    it('should return the index of the array element that is equal to the search key if the element is before the middle of the array', () => {
      const r = [0, 1, 2, 3, 4];
      const val = 1;
      expect(binarySearch(r, val)).toBe(1);
    });
    it('should return the index of the array element that is equal to the search key if the element is after the middle of the array', () => {
      const val = 3;
      expect(binarySearch(arr, val)).toBe(3);
    });
    it('should return -1 if the element is not in the array', () => {
      const val = 100;
      expect(binarySearch(arr, val)).toBe(-1);
    });
  });
});
