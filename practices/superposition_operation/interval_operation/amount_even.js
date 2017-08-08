'use strict';

function amount_even(collection) {
  var a = collection.filter(value => {return value%2 === 0});
  return a.reduce((p,value) => {
    return p+= value},0)
}

module.exports = amount_even;
