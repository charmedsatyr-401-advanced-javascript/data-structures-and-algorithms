## Sorts: Implement Insertion Sort
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/19)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=merge-sort)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

# Merge Sort

## Challenge
* Write a function for merge sort that takes in an unsorted array and returns the array sorted using merge sort.

## Approach & Efficiency
Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to merge two arrays in sorted order as long as each is sorted in the first place. 

1) Recursively split the input array in half until a sub-array with only one element is produced.
2) Merge each sorted sub-array together to produce the final sorted array.

I use two helper functions. The first is a `separate` function to split arrays in two. This function returns an object with `left` and `right` properties with values of the left and right sides of the array. Then, I use a `merge` function to compare the first elements of two arrays and put them in to a new array in sorted order.

The main `mergeSort` function has a base case of a an array with a length of 1 or less. In that function, an array is first split into left and right parts, and then `mergeSort` is called recursively on each half. At the top of the call stack, we get a `left` and `right` with one element each. Those values are assigned to `l` and `r`, and the two are merged together using `merge`. The merged array is returned. At the bottom of the call stack, that merged array will include all of the numbers in the original array. 

It has a an efficiency of O(n) space and O(n log n) time.

## UML
N/A
