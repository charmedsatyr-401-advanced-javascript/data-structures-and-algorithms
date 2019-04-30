// Split the array in two
const separate = arr => {
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Return the two halves
  return { left, right };
};

// Assemble a sorted array from two arrays.
// This function is only given single numbers
// and sorted arrays by the mergeSort function.
const merge = (left, right) => {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  // Spread the result array along with any remaining left/right array items.
  // The remaining left/right items will be > those in result, if both
  // left and right arguments were sorted arrays to begin with, as intended.
  return [...result, ...(left.length ? left : right)];
};

// Parent function
const mergeSort = arr => {
  // If the array is too short to be sorted, return it.
  // Note that short returned values are stored in variables below
  // when they are part of a recursive function call.
  if (arr.length <= 1) {
    return arr;
  }

  // Split the arr in two
  const { left } = separate(arr);
  const { right } = separate(arr);

  // Repeat the splits until the arr.lengths <= 1.
  // Those individual numbers are saved to variables l and r.
  // Then they are sorted via the merge function below, and
  // the sorted array is saved to l and r in the previous
  // recursive instance of mergeSort. As we go back up
  // the chain to the original mergeSort call, the sorted arrays
  // saved to l and r get longer, until they are sorted halves of
  // the original argument, which are themselves then merged.
  const l = mergeSort(left);
  const r = mergeSort(right);

  // Merge the two arrays
  return merge(l, r);
};

module.exports = mergeSort;
