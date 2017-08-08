'use strict';
var even_group_calculate_average = function(collection){
  collection = collection.filter((value,index) =>{
    if (index%2 === 1) return 1;
    else return 0;
  })
  collection = collection.filter(value =>{
    if (value%2 === 0)  return 1;
    else return 0;
  })

  if (collection.length !== 0){
    var result = [];
    var [a_count,b_count,c_count] = [0,0,0];
    var [a,b,c] = [0,0,0];
    for(let i=0;i<collection.length;i++){
      if(collection[i].toString().length === 1){
        a += collection[i];
        a_count++;
      }
      if(collection[i].toString().length === 2){
        b += collection[i];
        b_count++;
      }
      if(collection[i].toString().length === 3){
        c += collection[i];
        c_count++;
      }
    }
    if (a_count === 0 && b_count === 0){
      result.push(c/c_count);
    }
    else {
      result.push(a/a_count);
      result.push(b/b_count);
      result.push(c/c_count);
    }
    collection = result;
  }
  return collection;
};
module.exports = even_group_calculate_average;
