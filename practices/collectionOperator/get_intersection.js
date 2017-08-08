'use strict';

function get_intersection(collection_a, collection_b) {
  var result = new Array();
  collection_b.forEach(value =>{
    if(collection_a.includes(value))
      result.push(value);
  })
  return result;
}
module.exports = get_intersection;
