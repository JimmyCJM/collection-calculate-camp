'use strict';

function find_first_even(collection) {
  var result = collection.filter(value => {
    if (value%2 === 0) return 1;
    else return 0;
  });
  return result[0];
}

module.exports = find_first_even;

