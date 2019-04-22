'use strict';

const { number } = require('faker').random;
const insertionSort = require('../insertion-sort.js');

describe('insertionSort', () => {
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
    expect(isSorted(insertionSort(arr))).toBeTruthy();
  });
  it('should return a sorted array with no changes', () => {
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    expect(insertionSort(arr)).toEqual(arr);
  });
  it('should return a backwards-sorted array in sorted order', () => {
    const backwards = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    expect(insertionSort(backwards)).toEqual(backwards.reverse());
  });
  it('should return an empty array argument unchanged', () => {
    const empty = [];
    expect(insertionSort(empty)).toEqual(empty);
  });
  it('should return a single-element array unchanged', () => {
    const one = [1];
    expect(insertionSort(one)).toEqual(one);
  });
});
