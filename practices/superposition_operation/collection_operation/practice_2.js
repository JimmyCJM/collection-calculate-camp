'use strict';

function hybrid_operation_to_uneven(collection) {
  var a = [];
  collection.filter(value => {return value%2 === 1}).forEach(value => {
    return  a.push(value*3+2)});
  return a;
}

module.exports = hybrid_operation_to_uneven;

