'use strict';

function get_letter_interval(number_a, number_b) {
  var result = new Array();
  if (number_a < number_b){   //判断是否自增
    for(var i=0;i<number_b-number_a+1;i++){
      result.push(String.fromCharCode(number_a+i+96));
    }
  }
  if (number_a > number_b){   //判断是否自减
    for (var i=0;i<number_a-number_b+1;i++){
      result.push(String.fromCharCode(number_a-i+96));
    }
  }
  if (number_a == number_b){
    result.push(String.fromCharCode(number_a+96));
  }
  return result;
}


module.exports = get_letter_interval;
