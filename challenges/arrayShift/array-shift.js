'use strict';

/**
 * insertShiftArray
 * @param  {array} arr
 * @param  {} val
 * @param  {} {if(!arr||!val
 * @returns {array}
 */
function insertShiftArray(arr, val) {
  if (!arr || !val) {
    throw new Error('`insertShiftArray` error: Two arguments are required.');
  } else if (!Array.isArray(arr)) {
    throw new Error('`insertShiftArray` error: The first argument must be an array.');
  }

  const result = [];
  const midpoint = Math.ceil(arr.length / 2) - 1;

  for (let i = 0; i < arr.length; i++) {
    if (i < midpoint) {
      result[i] = arr[i];
    }

    if (i === midpoint) {
      result[i] = arr[i];
      result[i + 1] = val;
    }

    if (i > midpoint) {
      result[i + 1] = arr[i];
    }
  }

  return result;
}

module.exports = exports = insertShiftArray;