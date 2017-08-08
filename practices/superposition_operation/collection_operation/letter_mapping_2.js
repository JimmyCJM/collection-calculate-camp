'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(Math.ceil(collection.reduce((p,value) => {
    return p += value;
  },0)/collection.length)+96)
}

module.exports = average_to_letter;

