## Code Challenge 02: Array Shift
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/3)

[travis](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

# Array Shift
Insert and shift an array in middle at index.

## Challenge
Write a function called `insertShiftArray` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
Our approach is to create an empty array and then loop through the input array a single time. If the index of the input array is before its midpoint (rounded up), the element is added to the new array. If the index is at the midpoint, we add the element and the additional argument value. If the index is after the midpoint, we add the input array value, accounting for the now-different values at each index of the new array and the input array.

This solution has a Big O notation efficiency of O(n) for time/space.

## Solution
![whiteboard](../../assets/array-shift-whiteboard.jpg)