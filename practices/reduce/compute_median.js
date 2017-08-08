'use strict';

function compute_median(collection) {
  collection = collection.sort(compare);
  if (collection.length%2 === 0) return (collection[collection.length/2 - 1]+collection[collection.length/2])/2;
  else return collection[(collection.length-1)/2];
}

function compare(first,second) {
  if(first === second) return 0;
  if(first>second) return 1;
  if(first<second) return -1;
}

module.exports = compute_median;


