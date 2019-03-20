## Code Challenge 03: Array Binary Search
[PR]()
[travis](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

# Array Binary Search
Return the index of an element in an array if it exists, else -1.

## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
Our group declared a variable `result` with a value of -1. We then iterate through the array and check if each element is equal to the `key` argument. If it is, `result` is reassigned to the value's index, and the iteration is stopped. The result is returned once the iteration has completed or been stopped.

This function requires a single iteration through the array and has a space/time efficiency of O(n), where n is the length of the array.

## Solution
![whiteboard](../../assets/array-binary-search-whiteboard.jpg)
