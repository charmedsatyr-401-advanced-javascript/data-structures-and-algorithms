'use strict';

const binarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length - 1;
  while (high > low) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
