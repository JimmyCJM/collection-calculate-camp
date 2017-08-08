'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  collection.filter((value,index) =>{
    if(result.includes(value)) return 0;
    else {
      result.push(value);
    }return 1;
  })
  return result;
}

module.exports = choose_no_repeat_number;
