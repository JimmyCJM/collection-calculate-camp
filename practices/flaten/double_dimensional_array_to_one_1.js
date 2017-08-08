'use strict';

function double_to_one(collection) {
  var result = new Array();
  collection.forEach(value => result = result.concat(value));
  return result;
}

module.exports = double_to_one;
