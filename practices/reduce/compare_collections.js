'use strict';

function compare_collections(collection_a, collection_b) {
  var result = 0;
  collection_a.forEach((value,index) => {
    if(value !== collection_b[index]) result = false;
    else if (value === collection_b[index] && index === collection_a.length -1) result = true;
  });
  return result;
}

module.exports = compare_collections;


