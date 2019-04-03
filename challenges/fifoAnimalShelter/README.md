## Code Challenge 12: First-in, First-out Animal Shelter
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/12)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=fifo_animal_shelter)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

# FIFO Animal Shelter
Insert and shift an array in middle at index.

## Challenge
* Create a class called `AnimalShelter` which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
* Implement the following methods:
  * `enqueue(animal)`: adds `animal` to the shelter. `animal` can be either a dog or a cat object.
  * `dequeue(pref)`: returns either a `dog` or a `cat`. If pref is not "dog" or "cat" then return `null`.

## Approach & Efficiency
* Our approach was to create a queue-like class with `front` and `back` properties in its constructor.
* `enqueue(animal)`: Adding an animal to the back of the animal shelter was a matter of instantiating a new instance of `node` with the `animal` data and reassigning pointers in place to place it at the back of the line in the animal shelter and then deal with edge cases as needed. This approach has a time/space efficiency of O(1).
* `dequeue(pref)`: We examined the `data` of the `first` node in the queue; if it did not match the `pref`, it was removed from the animal shelter and re-`enqueue`d at the back of the line. When the `first` node's data matched `pref`, the node was removed from the queue, and the data was returned. Edge cases were handled separately. 

This solution has a Big O notation efficiency of O(n) for time and O(1) for space.

Note that the order of animals in the shelter might be different after a `dequeue`. A better solution might have been to iterate from the front to the back of the line with two variables, `current` and `current.next`. Once `current.next.data` equaled the `pref`, the target value would be saved in a `target` variable, `current`'s `next` property would be assigned to `current.next.next`, and `target` would be returned.


## Solution
![whiteboard](../../assets/fifo_animal_shelter.jpg)
