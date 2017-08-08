'use strict';

function choose_even(collection) {
  return collection.filter(value =>{
    if(value%2 === 0) return 1;
    else return 0;
  })
}

module.exports = choose_even;
