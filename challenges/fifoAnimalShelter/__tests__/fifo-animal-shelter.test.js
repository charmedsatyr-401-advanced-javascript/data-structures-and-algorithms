'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('`AnimalShelter` class', () => {
  it('Can successfully instantiate an empty animal shelter`', () => {
    const as = new AnimalShelter();
    expect(as).toBeDefined();
  });

  describe('`enqueue(animal)` method', () => {
    it('Can successfully `enqueue` a `dog` or `cat` onto a stack', () => {
      const as = new AnimalShelter();
      as.enqueue('dog');
      expect(as.front.data).toBe('dog');
    });
    it('Can successfully `enqueue` multiple animals onto a stack', () => {
      const as = new AnimalShelter();
      as.enqueue('cat');
      as.enqueue('dog');
      as.enqueue('dog');
      expect(as.front.data).toBe('cat');
      expect(as.front.next.data).toBe('dog');
      expect(as.back.data).toBe('dog');
    });
    it('Returns `null` if `enqueue` is used on an animal other then a dog or cat', () => {
      const as = new AnimalShelter();
      const attempt = as.enqueue('mouse');
      expect(attempt).toBeNull();
    });
  });
  describe('`dequeue(pref)` method', () => {
    it('Can successfully `dequeue` off the animal shelter the expected value', () => {
      const as = new AnimalShelter();
      as.enqueue('cat');
      const value = as.dequeue('cat');
      expect(value).toBe('cat');
    });
    it('Can successfully empty an animal shelter after multiple `dequeue`s.', () => {
      const as = new AnimalShelter();
      as.enqueue('cat');
      as.enqueue('dog');
      as.enqueue('dog');
      expect(as.front.data).toBe('cat');
      as.dequeue('cat');
      expect(as.front.data).toBe('dog');
      as.dequeue('dog');
      expect(as.front.data).toBe('dog');
      as.dequeue('dog');
      expect(as.front).toBeNull();
    });
    it('Can successfully `dequeue` an animal that is not at the front', () => {
      const as = new AnimalShelter();
      as.enqueue('cat');
      as.enqueue('cat');
      as.enqueue('cat');
      as.enqueue('cat');
      as.enqueue('cat');
      as.enqueue('dog');
      const pref = as.dequeue('dog');
      expect(pref).toBe('dog');
    });
    it('Returns `null` if the animal shelter is empty', () => {
      const as = new AnimalShelter();
      const oops = as.dequeue('cat');
      expect(oops).toBeNull();
    });
    it('Returns `null` if there is one animal in the shelter, but it is not `pref`', () => {
      const as = new AnimalShelter();
      as.enqueue('cat');
      const oops = as.dequeue('dog');
      expect(as.front.data).toBe('cat');
      expect(oops).toBeNull();
    });
    it('Returns `null` if the `pref` is not a `dog` or `cat`', () => {
      const as = new AnimalShelter();
      const oops = as.dequeue('platypus');
      expect(oops).toBeNull();
    });
    it('Maintains FIFO order after multiple dequeues', () => {
      const as = new AnimalShelter();
      as.enqueue('cat');
      as.enqueue('cat');
      as.enqueue('dog');
      as.enqueue('dog');
      as.enqueue('cat');

      as.dequeue('dog');
      expect(as.front.data).toBe('cat');
      expect(as.front.next.data).toBe('cat');
      expect(as.front.next.next.data).toBe('dog');
      expect(as.front.next.next.next.data).toBe('cat');
    });
  });
});
