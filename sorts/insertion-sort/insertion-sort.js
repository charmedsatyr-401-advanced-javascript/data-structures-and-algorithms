'use strict';

/***
 * @function
 * @name insertionSort
 * @param arr {array} An array of numbers
 ***/
const insertionSort = arr => {
  // Looping from the second element to the end
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
  }
  return arr;
};

module.exports = insertionSort;
