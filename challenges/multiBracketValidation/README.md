## Code Challenge 13: Multi-Bracket Validation
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/13)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=multi_bracket_validation)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms?branch=multi_bracket_validation)

# Multi-Bracket Validation
Return a Boolean representing whether or not the brackets in a string are balanced. 

## Challenge
* Create a function that takes a string as its only argument and returns a Boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:
  * Round Brackets : ()
  * Square Brackets : []
  * Curly Brackets : {}

## Approach & Efficiency
* My approach was to create a stack as a helper data structure within this function because stacks use a LIFO model: when a closing bracket is encountered reading left to right, the first out of the stack of preceding opening brackets should always be its match.
* The function takes a string and iterates through it. It pushes opening brackets to the stack. When a character `i` in the string iteration is a closing bracket, the function pops off a character from the stack and compares it to `i` using the `matchers` object. In this manner, brackets are compared in the order in which they should match, and any mismatched or unmatched brackets cause a `false` return. Edge cases are handled separately.

This solution has a Big O notation efficiency of O(n) for time and space.

## Solution
![whiteboard](../../assets/multi-bracket-validation.jpg)
