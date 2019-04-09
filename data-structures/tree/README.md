# Code: Trees

[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/14)
[PR Breadth First Traversal](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/14)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=breadth_first)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms&branch=breadth_first)

### Implement a Tree
* Implement a tree

## Challenge
### Implement a Tree
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a BinaryTree class
  * Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.
* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
* Create a BinarySearchTree class
  * Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  * Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
### Breadth First Traversal
* Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

## Approach & Efficiency
* Node: The Node class was defined with `left`, `right`, and `data` properties. An instance of `node` can be instantiated with a `data` argument.
* BinaryTree class
  * `add`: This method takes `val`, `root`, and `q` arguments; `root` defaults to the `BinaryTree` instance's `root`, and `q` defaults to a new `Queue` instance if they are not provided. The method enqueues and dequeues the root and then checks the dequeue for `left` and `right` properties. If both exist, the function calls itself recursively on the `left` node. If the `left` does not exist, a new node is created there, or it's created at the `right` node if a `right` does not exist. In this way, New nodes are added to the tree preferring left-to-right order. This method has a time efficiency of O(n) and a space efficiency of O(1).
  * `breadthFirstOrder`: This method takes no arguments. If the tree `root` is empty, `null` is returned. Otherwise, an empty array is created to store values, an instance of a Queue is created in the method as a helper function, and the `root` is assigned to a `current` variable. A `while` loop is declared while the queue is not empty. Within the loop, the queue is dequeued, and the value of the dequeue is added to the `values` array. Then, if the dequeued node has a left child, it is queued, followed by any right child. The loop then restarts. This method ensures that each generation of the root's children is added to the queue in left to right order and their values are pushed to the array in order. After the while loop ends, the `values` array is returned. This method has a time and space efficiency of O(n).
  * `preOrder`: This method takes `root` and `values` arguments that default to the instance's `root` and an empty array, respectively. The root's `data` is added to the array; if there are `left` and `right` nodes to the `root`, `preOrder` is called on those nodes recursively using the existing `values` set. `values` is returned at the end. This method has a time efficiency of O(n) and a space efficiency of O(1).
  * `inOrder`: This method takes `root` and `values` arguments that default to the instance's `root` and an empty array, respectively. If there is a `left` node to the `root`, `inOrder` is called on it recursively using the existing `values` set. Then, root's `data` is added to the array. Last, if there is a `right` node to the `root`, `inOrder` is called recursively on it using the existing `values` set. `values` is returned at the end. This method has a time efficiency of O(n) and a space efficiency of O(1).
  * `postOrder`: This method takes `root` and `values` arguments that default to the instance's `root` and an empty array, respectively. If there are `left` and `right` nodes to the `root`, `preOrder` is called on those nodes recursively using the existing `values` set. Last, the root's `data` is added to the array; `values` is returned at the end. This method has a time efficiency of O(n) and a space efficiency of O(1).
* BinarySearchTree class
  * `add`: This array recursively works down the instance of `BinarySearchTree` comparing its `val` argument to the `root` node's `data`. If the `val` is less than `root.data`, the method will try to add the `val` to the left node or call `add` recursively on the left node; if the `val` is greater than or equal to the `root.data`, the method will try to add the `val` to the right node or call `add` recursively on the right node.
  * `contains`: This method has not been implemented.

## API
* `BinaryTree`
  * `add(val, root, q)` -> `undefined`; adds a node with `val` to the tree
  * `breadthFirstOrder()` -> `Array`
  * `preOrder(root, values)` -> Array
  * `inOrder(root, values)` -> Array
  * `postOrder(root, values)` -> Array
* `BinarySearchTree`
  * `add(val, root)` -> `undefined`; adds a node with `val` to the tree in order
  * `contains()` -> `undefined`

## Whiteboards
N/A

