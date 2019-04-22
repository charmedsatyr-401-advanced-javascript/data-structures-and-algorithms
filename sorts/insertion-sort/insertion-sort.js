'use strict';

/***
 * @function
 * @name insertionSort
 * @param arr {array} An array of numbers
 ***/
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    temp = arr[j + 1];
  }
  return arr;
};

module.exports = insertionSort;
