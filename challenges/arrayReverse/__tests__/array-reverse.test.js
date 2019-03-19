'use strict';

const reverseArray = require('../array-reverse.js');

describe('`reverseArray` function', () => {
  it('should return `null` if its argument is not an array', () => {
    expect(reverseArray('hi there!')).toBeNull();
  });
  it('should return an in reverse order from the input array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});
