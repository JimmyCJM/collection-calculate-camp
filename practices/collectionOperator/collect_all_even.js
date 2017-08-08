'use strict';

function collect_all_even(collection) {
  var result = new Array();
  collection.forEach(value => {
    if ((value % 2) !== 1){
      result.push(value);
    }
  })
  return result;
}

module.exports = collect_all_even;
