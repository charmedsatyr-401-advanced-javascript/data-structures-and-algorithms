'use strict';

const { Hashtable } = require('../../data-structures/hashtable/hashtable.js');

// Assuming that both hash table parameters are instances of `Hashtable`
const leftJoin = (left, right) => {
  const result = new Hashtable();
  // Iterate through the hash table (which has a table
  // that is an array of linked lists)
  for (let i = 0; i < left.table.length; i++) {
    // Don't bother with empty linked lists.
    if (left.table[i].head) {
      // Print an array of values in each linked list
      const leftValues = left.table[i].print();
      // We do not know what the original key was, so i is just the index
      // Add the array as the value at that index of our hash table.
      // (Must be insert, not append)
      result.table[i].insert(leftValues);

      // If the right hash table has something at that index
      if (right.table[i].head) {
        // Print it even though we don't know if it was for the correct key
        // or for a collision with that key...
        // We are ignoring that problem.
        const rightValues = right.table[i].print();
        // Add them to the values of the result hash table
        // at that index
        result.table[i].head.data.push(...rightValues);
      } else {
        // Otherwise add `null` to the result hash table
        // at that index
        result.table[i].head.data.push(null);
      }
    }
  }
  // Return the result
  return result;
};

module.exports = { leftJoin };
