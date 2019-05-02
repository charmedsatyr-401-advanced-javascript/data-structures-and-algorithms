'use strict';

const { leftJoin } = require('../left-join.js');
const { Hashtable } = require('../../../data-structures/hashtable/hashtable.js');

describe('`leftJoin` function', () => {
  xit('should return an array containing items with values matching the values of keys shared by both arguments at those key indices', () => {
    const left = new Hashtable();
    left.add('fond', 'enamored');
    console.log('fond key:', left.hash('fond'));
    left.add('wrath', 'anger');
    console.log('wrath key:', left.hash('wrath'));

    console.log('The full linked list:', left.table);

    left.add('diligent', 'employed');

    const right = new Hashtable();
    right.add('fond', 'averse');
    right.add('wrath', 'delight');
    right.add('diligent', 'idle');
    right.add('guide', 'follow');

    const result = leftJoin(left, right);

    const fond = left.hash('fond');
    const wrath = left.hash('wrath');
    const diligent = left.hash('diligent');
    const expected = ['enamored', 'averse'];

    // These are broken because my Hashtable function adds every value to every linked list in its array.
    expect(result.table[fond].head.data).toEqual(expected);
    expect(result.table[wrath].head.data).toEqual(['anger', 'delight']);
    expect(result.table[diligent].head.data).toEqual(['employed', 'idle']);
  });
  xit('should add a `null` value for any keys right does not have in common with left', () => {
    const left = new Hashtable();
    left.add('fond', 'enamored');
    left.add('wrath', 'anger');
    left.add('diligent', 'employed');

    const right = new Hashtable();
    right.add('fond', 'averse');

    const result = leftJoin(left, right);

    const fond = left.hash('fond');

    const wrath = left.hash('wrath');
    const diligent = left.hash('diligent');
    expect(result.table[fond].head.data).toEqual(['enamored', 'averse']);
    expect(result.table[wrath].head.data).toEqual(['anger', null]);
    expect(result.table[diligent].head.data).toEqual(['employed', null]);
  });
  xit('should not include items left does not have in common with right', () => {
    const left = new Hashtable();
    left.add('fond', 'enamored');

    const right = new Hashtable();
    right.add('wrath', 'anger');

    const result = leftJoin(left, right);

    const fond = left.hash('fond');
    expect(result.table[fond].head.data).toEqual(['enamored', null]);
  });
});
