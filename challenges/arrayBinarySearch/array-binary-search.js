'use strict';

// return the index of the array's element
// that is equal to the search key,
// or -1 if the element does not exist

// e.g., [4, 8, 15, 16, 23, 42], 15 -> 2
// [11, 22, 33, 44, 55, 66, 77], 90 -> -1

const binarySearch = (arr, val) => {
  if (!val) {
    return null;
  }
  if (typeof val !== 'string' && typeof val !== 'number') {
    return null;
  }
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result = i;
      break;
    }
  }
  return result;
};

module.exports = binarySearch;
