'use strict';
var calculate_median = function(collection){
  var result = 0;
  collection = collection.filter((value,index) =>{
    if(index%2 === 1) return 1;
    else return 0;
  })
  if (collection.length%2 === 1)  result = collection[parseInt(collection.length/2)];
  else result = (collection[Math.ceil(collection.length/2-1)]+collection[Math.ceil(collection.length/2)])/2;
  return result;
};
module.exports = calculate_median;
