'use strict';

const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

module.exports = reverseArray;
