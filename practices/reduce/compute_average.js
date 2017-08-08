'use strict';

function compute_average(collection) {
  return collection.reduce((p,value) => p += value/collection.length,0);
}

module.exports = compute_average;

