'use strict';

function choose_multiples_of_three(collection) {
  return  collection.filter(value =>{
    if(value%3 === 0) return 1;
    else return 0;
  })
}

module.exports = choose_multiples_of_three;
