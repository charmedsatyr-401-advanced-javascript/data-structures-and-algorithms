'use strict';

/***
 * @function
 * @name insertionSort
 * @param arr {array} An array of numbers
 ***/
const insertionSort = arr => {
  // Looping from the second element to the end
  for (let i = 1; i < arr.length; i++) {
    // Set a temp variable equal to the value at that index
    const temp = arr[i];
    // Set an inner loop that begins at the index before and
    // continues while the inner loop meets two conditions:
    // 1) It's dealing with values that exist in the array
    // 2) the temp value is less than the inner loop value
    let j = i - 1;
    while (j >= 0 && temp < arr[j]) {
      // Reassign the value at j+1 to the value at j
      // (Move it down)
      arr[j + 1] = arr[j];
      // Decrement the start of the inner loop
      j--;
    }
  }
  return arr;
};

module.exports = insertionSort;
