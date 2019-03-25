## Code: Implement a Linked List
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/6)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

# Singly Linked List
Implement a Linked List using JavaScript classes.

## Challenge
* Create a `Node` class that has properties for the value stored and a pointer to the next node.
* Create a `LinkedList` class with a method `insert` that can instantiate a new node with given data, a method `includes` that returns a Boolean for whether an argument value is stored in a node on the linked list, and a `print` method that takes no arguments and returns a collection of all current node values on the linked list.

## Approach & Efficiency
* I created a class `Node` and a class `LinkedList` with the specified properties.
* `insert` reassigns the `head` value of the `LinkedList` instance to that of a new instance of `Node`, avoiding iteration through the chain of nodes in the linked list. It has a space/time efficiency of O(1).
* `includes` may iterate through the entire chain of nodes on the linked list to find a match to a given argument, but it only returns a Boolean. It has a time efficiency of O(n) and a space efficiency of O(1).
* `print` may iterate through the entire chain of nodes on the linked list to add the node's data to a returned `collection`. It has a time efficiency of O(n) and, because it creates a copy of all the data in the linked list, a space efficiency of O(n).


## API
* Each instance of `Node` on the linked list has `data` and `next` properties. `data` stores the node's data, and `next` points to the next node in the linked list. If the node is at the end of the linked list, its `next` value is `null`.
* Each instance of the `LinkedList` class includes a `head` property initially set to `null` and has three methods: `insert`, `includes`, and `print`.

  * `insert(val)` takes a value argument and creates a new instance of `Node` with that value as the node's `data`. `insert` updates the `head` property of its parent instance of `LinkedList` to the new node.
  * `includes(val)` takes a value and returns `true` if the value exists in an instance of `Node` on the linked list and `false` if it doesn't.
  * `print()` returns an object with position/data key/value pairs for each instance of `Node` stored on the LinkedList. Keys in the returned object correspond to each node's 0-based position in the linked list.
