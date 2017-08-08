'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((p,value) => p += value);
}

module.exports = calculate_elements_sum;

