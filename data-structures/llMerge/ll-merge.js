'use strict';

const mergeLists = (a, b) => {
  if (typeof a !== 'object' || typeof b !== 'object') {
    throw new Error('`mergeLists` error: Both arguments must be objects.');
  }
  let currentA = a.head;
  let currentB = b.head;

  // If `a` has length of 0
  if (!currentA) {
    // Just return the pointer to `b.head`
    return currentB;
    // And vice versa
  } else if (!currentB) {
    return currentA;
  }

  // Iterate through the lists until one runs out
  while (currentA.next && currentB.next) {
    // Reassign `b.head` to the next node on `b`
    b.head = currentB.next;
    // Reassign the `next` of the stored `currentB` to the
    // one after `currentA`
    currentB.next = currentA.next;
    // Reassign `currentA.next` to the `currentB` stored node
    currentA.next = currentB;
    // Iterate through both linked lists
    currentA = currentB.next;
    currentB = b.head;
  }

  // Since the function returns `a.head`, and `b` nodes
  // have been zipped into `a`, if `b` is shorter than `a`,
  // the remaining nodes of `a` do not need to be moved.
  // They are already in place.

  // However, if `b` is longer than `a`, the remainder of `b`
  // after the `while` loop should be tacked onto the end of `a`
  if (currentB) {
    currentA.next = currentB;
  }
  // Return `a.head`
  return a.head;
};

module.exports = mergeLists;
