'use strict';

const { LinkedList } = require('../../data-structures/linkedList/linked-list');

// Write a function that accepts a lengthy string parameter.

// Without utilizing any of the built-in library methods
// available to your language, return the first word to
// occur more than once in that provided string.
const hash = word => {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += word.charCodeAt(i);
  }
  const product = sum * 599;
  const index = Math.floor(product % 1024);
  return index;
};

const repeatedWord = str => {
  const wordArr = str.split(' ');
  const hashmap = Array(1024).fill(new LinkedList());

  let result = null;
  for (let i = 0; i < wordArr.length; i++) {
    const regex = /[a-z]+/gi;
    const word = wordArr[i].toLowerCase().match(regex)[0];
    const index = hash(word);
    if (hashmap[index].includes(word)) {
      result = word;
      break;
    } else {
      hashmap[index].insert(word);
    }
  }
  return result;
};

module.exports = { hash, repeatedWord };
