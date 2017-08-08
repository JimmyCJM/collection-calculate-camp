'use strict';
var calculate_average = function(collection){
  var result = 0;
  collection = collection.filter((value,index) =>{
    if (index%2 === 1){
      result += value;
      return 1;
    }
    else return 0;
  })
  return result/collection.length;
};
module.exports = calculate_average;
