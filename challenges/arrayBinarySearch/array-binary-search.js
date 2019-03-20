'use strict';
/**
 * @param  {} arr
 * @param  {} val
 * @param  {} =>{letlow=0;lethigh=arr.length-1;while(high>low
 * @param  {} {letmid=Math.floor((high+low
 * @param  {} /2
 * @param  {} ;if(arr[mid]===val
 * @param  {} {returnmid;}elseif(arr[mid]>val
 * @function binarySearch
 */
// Binary search function
const binarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length - 1;
  while (high > low) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
