'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');
/**
 * @param  {} {this.main=newStack(
 * @param  {} ;this.temp=newStack(
 * @param  {} ;}enqueue(val
 * @param  {} {while(this.main.top
 * @param  {} {consttemp=this.main.pop(
 * @param  {} ;this.temp.push(temp
 * @param  {} ;}this.main.push(val
 * @param  {} ;while(this.temp.top
 * @param  {} {consttemp=this.temp.pop(
 * @param  {} ;this.main.push(temp
 * @param  {} ;}}dequeue(
 * @param  {} {if(this.main.top
 * @param  {} {returnthis.main.pop(
 */
class PseudoQueue {
  constructor() {
    this.main = new Stack();
    this.temp = new Stack();
  }
  enqueue(val) {
    while (this.main.top) {
      const current = this.main.pop();
      this.temp.push(current);
    }
    this.main.push(val);
    while (this.temp.top) {
      const current = this.temp.pop();
      this.main.push(current);
    }
  }
  dequeue() {
    if (this.main.top) {
      return this.main.pop();
    }
    return null;
  }
}

module.exports = PseudoQueue;
