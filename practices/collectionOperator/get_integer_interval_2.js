'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = new Array();
  if(number_a < number_b){    //判断是否自增
    if(number_a%2 == 1){
      number_a ++;
    }
    for(var i=0;i<=(number_b-number_a)/2;i++){
      result.push(number_a + 2*i);
    }
  }
  if (number_a > number_b){   //判断是否自减
    if (number_a%2 ==1){
      number_a --;
    }
    for (var i=0;i<=(number_a-number_b)/2;i++) {
      result.push(number_a - 2*i);
    }
  }
  if (number_a == number_b){
    result.push(number_a);
  }
  return result;
}

module.exports = get_integer_interval_2;
