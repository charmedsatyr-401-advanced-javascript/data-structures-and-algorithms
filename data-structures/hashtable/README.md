# Code: Hash Table
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/21)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=hashtable)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

### Hash Table
* Create a `Hashtable` class.

## Challenges
### Hash Table
* Implement a hash table with the following methods:
  * `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
  * `get`: takes in the key and returns the value from the table.
  * `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
  * `hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
My hash table is constructed as an array `table` containing 1024 linked lists.
* `add` appends a `value` to the linked list at the index in the `table` equal to the hashed value of its `key`.
* `get` prints an array of values located in the linked list at the index in the `table` equal to the hashed value of its `key`.
* `contains` returns a Boolean based on whether the linked list at the index in the `table` equal to the hashed value of the `key` contains any values.
* `hash` converts the `key` into an array of ASCII codes, adds the codes together, multiplies the sum by 599, and returns the remainder of the product when divided by 1024, rounded down.

Each method has an efficiency of O(1) for time and space, except in the case of a collision. In the case of a collision, `add` and `get` methods may take additional time directly related to the number of nodes in the linked list at the index in the `table` equal to the hashed value of the relevant `key`.

## API
* `add(key, value)` -> Adds a `value` to the hashtable at the given `key`
* `get(key)` -> value
* `contains(key)` -> Boolean
* `hash(key)` -> index

## Whiteboard
N/A