'use strict';

function grouping_count(collection) {
  var result = collection.reduce(function (p,k){
    if (k in p){
      p[k]++
    }
    else {
      p[k] = 1
    }
    return p;
  },{});
  return result;
}
/*
function grouping_count(collection) {
  return collection.reduce((p,k) => (p[k]++ || (p[k] = 1),p),{});
}
*/

module.exports = grouping_count;
