'use strict';

const quickSort = arr => {
  // Return the array if it's too short to sort
  if (arr.length <= 1) {
    return arr;
  }

  // Arbitrarily set last arr element as pivot value
  const pivot = arr.pop();

  // Make empty arrays for values <= and > pivot value
  const lessEq = [];
  const greater = [];

  // Loop through arr, separating values by comparison to pivot
  arr.forEach(n => (n <= pivot ? lessEq.push(n) : greater.push(n)));

  // Return recursively sorted values
  return [...quickSort(lessEq), pivot, ...quickSort(greater)];
};

module.exports = quickSort;
