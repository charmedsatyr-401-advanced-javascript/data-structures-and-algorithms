'use strict';

const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray('hello world')); // Error
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
