'use strict';

const { number } = require('faker').random;
const quickSort = require('../quick-sort.js');

describe('quickSort', () => {
  it('should sort a randomly generated unsorted array', () => {
    // Helper function
    const isSorted = arr => {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
      return true;
    };
    const arr = [number(), number(), number(), number(), number()];
    expect(isSorted(quickSort(arr))).toBeTruthy();
  });
  it('should return a sorted array with no changes', () => {
    // I do not know why the tests failed without the different arrays
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    const array = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    expect(quickSort(arr)).toEqual(array);
  });
  it('should return a backwards-sorted array in sorted order', () => {
    // I do not know why the tests failed without the different arrays
    const backwards = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    const forwards = [0.123, 1, 22, 44, 66, 77, 88, 99, 1221, 12121];
    expect(quickSort(backwards)).toEqual(forwards);
  });
  it('should return an empty array argument unchanged', () => {
    const empty = [];
    expect(quickSort(empty)).toEqual(empty);
  });
  it('should return a single-element array unchanged', () => {
    const one = [1];
    expect(quickSort(one)).toEqual(one);
  });
});
