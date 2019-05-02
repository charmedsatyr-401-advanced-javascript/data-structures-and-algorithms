## Code Challenge 28: Left Join
[PR](https://github.com/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms/pull/24)

[![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms.svg?branch=left_join)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/data-structures-and-algorithms)

# Left Join
Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge
* Write a function that LEFT JOINs two hashmaps into a single data structure.
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

## Approach & Efficiency
The challenge seemed simpler on the whiteboard, when I assumed items were stored as objects with keys and values. Our approach was to map over the `left` hash table, adding items to an independent data structure. In the same loop, we would check the `right` hash table for the item. If it contained the item, we would add that `right` value to the item in our independent data structure, at the same key. If it did not, we would add `null` at the same key. The indepenent data structure was then returned.

Our approach was to have a Big O notation of O(n^2) for space (since, given a bad hash function, we might have to iterate through an entire hash table and also each node in the table's linked lists), and a O(n) result for space.

However, after the fact, it occurred to me that keys are not actually stored in my implementation of a hash table. Instead, keys are hashed to produce a number, and values are stored in the array at that number index. We cannot go back and figure out what was hashed to get the number. This becomes a problem if we are trying to left join hash maps that contain values at colliding keys. We would left join unrelated data into the colliding key in our result data structure.

Additionally, we are given no guarantees about what sorts of hash tables we are given as inputs. They could have totally different hashing functions, and I'm not sure about the workaround for that.

The decisive problem I faced is that the hash table I wrote over the weekend, which takes key/value pairs, apparently adds each data point to every index, resulting in an array of 1024 duplicate linked lists. I did not realize this was a problem until it was too late to fix it.

## API
`leftJoin(left, right)` -> Hash table

## Solution
![whiteboard](../../assets/left_join.jpg)