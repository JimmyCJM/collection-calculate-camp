'use strict';

function double_to_one(collection) {
  var a = new Array();
  var result = new Array();
  collection.forEach(value => a = a.concat(value));
  a.forEach(value => {
    if (result.indexOf(value) !== -1);
    else result.push(value);
  })
}

module.exports = double_to_one;
