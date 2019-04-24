## Sorts: Implement Quick Sort
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/20)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=quick-sort)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

# Quick Sort

## Challenge
* Write a function for quick sort that takes in an unsorted array and returns the array sorted using quick sort.

## Approach & Efficiency
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

## UML
N/A
