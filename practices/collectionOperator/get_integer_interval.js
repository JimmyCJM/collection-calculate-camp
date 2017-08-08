'use strict';

function get_integer_interval(number_a, number_b) {
  var result = new Array();
  if(number_a < number_b){    //判断是否自增
    for(var i=0;i<number_b-number_a+1;i++){
      result.push(number_a+i);
    }
  }
  if (number_a > number_b){   //判断是否自减
    for(var i=0;i<number_a-number_b+1;i++){
      result.push(number_a-i);
    }
  }
  if (number_a == number_b){
    result.push(number_b);
  }
  return result;
}

module.exports = get_integer_interval;

