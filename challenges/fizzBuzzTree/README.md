## Code Challenge 16: FizzBuzz Tree
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/15)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=fizzbuzz_tree)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms?branch=fizzbuzz_tree)

# FizzBuzz Tree

## Challenge
* Write a function called `fizzBuzzTree` which takes a tree as an argument.
* Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
  * If the value is divisible by 3, replace the value with “Fizz”
  * If the value is divisible by 5, replace the value with “Buzz”
  * If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
* Return the tree with its new values.

## Approach & Efficiency
* My approach was to follow a `preOrder` traversal of the tree. On each node, the value of the node was examined to determine if it was divisible by 3, 5, or both. If it was, the data was modified in-place with the appropriate word. If it was not, the traversal continued recursively on the left and right branches of the node. Edge cases were handled separately. Once the tree had been traversed completely, it was returned.

This solution has a Big O notation efficiency of O(n) for time and O(h) for space, where h is the tree's height.

## Solution
![whiteboard](../../assets/fizzbuzz-tree.jpg)
