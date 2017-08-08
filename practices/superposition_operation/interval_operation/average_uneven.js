'use strict';

function average_uneven(collection) {
  var a = collection.filter(value => {return value%2 === 1});
  return a.reduce((p,value) => {
    return p+= value},0)/a.length
}

module.exports = average_uneven;
