'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(value =>{
    for (let i of collection_b){
      if(value%i === 0){
        return value;
      }
    }
  });
}

module.exports = choose_divisible_integer;
