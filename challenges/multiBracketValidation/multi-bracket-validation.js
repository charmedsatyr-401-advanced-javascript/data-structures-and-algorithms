'use strict';
/**
 * Multi-bracket validation - Declares whether brackets in a string are balanced
 * @module multi-bracket-validation
 **/

const { Stack } = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');

/**
 * This function takes a string and returns a Boolean
 * declaring whether the brackets are balanced
 * @function
 * @name multiBracketValidation
 * @params {string} A string that may include the characters {}()[]
 **/
const multiBracketValidation = str => {
  if (typeof str !== 'string' || !str) {
    return null;
  }

  const st = new Stack();
  const opener = /[([{]/g;
  const closer = /[)\]}]/g;

  const matchers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // Iterate through the string
  for (let i = 0; i < str.length; i++) {
    // Take the value of the string
    const p = str.charAt(i);

    // If p is an opener, push it to the stack
    if (opener.test(p)) {
      st.push(p);
    }

    // If p is a closer, pop from the stack to compare
    if (closer.test(p)) {
      let pop;
      if (st.peek()) {
        pop = st.pop();
      } else {
        // If the stack is empty, return false
        return false;
      }

      // If p and pop don't match up, return false
      if (matchers[pop] !== p) {
        return false;
      }
    }
  }
  // If the loop is finished, but the stack is not empty, return false
  if (st.top) {
    return false;
  }

  // Otherwise, return true
  return true;
};

module.exports = multiBracketValidation;
