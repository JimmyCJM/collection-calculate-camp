'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a;
  collection_b.forEach(value =>{
    if(!collection_a.includes(value))  result.push(value);
  })
  return result;
}

module.exports = get_union;

