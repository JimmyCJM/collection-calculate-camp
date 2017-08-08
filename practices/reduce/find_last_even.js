'use strict';

function find_last_even(collection) {
  var result = collection.filter(value => {
    if (value%2 === 0) return 1;
    else return 0;
  });
  return result[result.length - 1];
}

module.exports = find_last_even;
