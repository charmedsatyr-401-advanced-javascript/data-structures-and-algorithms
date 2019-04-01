# Code: Stacks and Queues
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/10)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

### Stacks and Queues
* Implement a Stack and a Queue.

## Challenges
### Node
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
### Stack
* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* Define a method called peek that does not take an argument and returns the value of the node located on the top of the stack.
### Queue
* Create a Queue class that has a top property. It creates an empty queue when instantiated.
* This object should be aware of a default empty value assigned to front when the queue is created.
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the stack.

## Approach & Efficiency
### Node
* The `Node` class is a duplicate of [the `Node` class created for use with linked lists](../linkedList/README.md).

### Stack
* `push` instantiates a new instance of `Node` and reassigns `top` and `next` pointers in place for that node. This method has a time efficiency of O(1) and a space efficiency of O(1).
* `pop` checks whether `top` and `top.next` are defined and replaces the `top` with the `next` value, else `null`. It returns `null` if there is no `top`. This method has a time efficiency of O(1) and a space efficiency of O(1).
* `peek` returns the `data` of `top` if it exists, else `null`, without iteration. This method has a time efficiency of O(1) and a space efficiency of O(1).

### Queue
* `enqueue` instantiates a new instance of `Node` and reassigns appropriate `back`, `next`, and, if necessary, `front` pointers in place. This method has a time efficiency of O(1) and a space efficiency of O(1).
* `dequeue` iterates through the instance of `Queue` until it reaches the node before the `front` node. It returns the value of that `front` node's data and reassigns the new `front` to the node behind it, updating other pointers as necessary. Invoking `dequeue` on an empty queue returns `null`. This method has a time efficiency of O(n) and a space efficiency of O(1).
* `peek` returns the `data` of `front` if it exists, else `null`, without iteration. This method has a time efficiency of O(1) and a space efficiency of O(1).

## API
### Stack
* `push(val)` -> `undefined`
* `pop()` -> `data`
* `peek()` -> `data`
### Queue
* `enqueue(val)` -> `undefined`
* `dequeue()` -> `data`
* `peek()` -> `data`

## Whiteboard
N/A
