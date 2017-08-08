'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = new Array();
  var decade = new Array();
  var unit = new Array();
  if (number_a < number_b){   //判断是否自增
    for (var i=0;i<number_b-number_a+1;i++){
      if(number_a+i <= 26){
        result.push(String.fromCharCode((number_a+i)%27+96));
      }
      else if(number_a+i <= 52){
        decade = String.fromCharCode(Math.floor((number_a+i)/26)+96);
        unit = String.fromCharCode((number_a+i)%26+97);
        result.push(decade + unit);
      }
    }
  }
  if (number_a > number_b){   //判断是否自减
    for (var i=0;i<number_a-number_b+1;i++){
      if (number_a-i > 52){
        decade = String.fromCharCode(Math.floor((number_a-i)/26)+96);
        unit = String.fromCharCode((number_a-i)%26+96);
        result.push(decade + unit);
      }
      else if(number_a-i > 26 ){
        decade = String.fromCharCode(Math.floor((number_a-i)/27)+96);
        unit = String.fromCharCode((number_a-i-26)%27+96);
        result.push(decade + unit);
      }
      else {
        result.push(String.fromCharCode((number_a-i)%27+96));
      }
    }
  }
  if (number_a == number_b){
    if (number_a > 52){
      decade = String.fromCharCode(Math.floor((number_a)/52)+96);
      unit = String.fromCharCode((number_a)%52+96);
      result.push(decade + unit);
    }
    if (number_a > 26 && number_a < 53){
      decade = String.fromCharCode(Math.floor((number_a)/27)+96);
      unit = String.fromCharCode((number_a-26)%27+96);
      result.push(decade + unit);
    }
    if (number_a < 27){
      result.push(String.fromCharCode((number_a)%27+96));
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

