'use strict';

function hybrid_operation_to_uneven(collection) {
  var a = 0;
  collection.filter(value => {return value%2 === 1}).forEach(value => {
    return  a+= value*3+5});
  return a;
}

module.exports = hybrid_operation_to_uneven;

