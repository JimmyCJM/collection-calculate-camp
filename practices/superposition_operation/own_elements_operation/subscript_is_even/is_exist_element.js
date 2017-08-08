'use strict';
var is_exist_element = function(collection,element){
  var result = 0;
  collection = collection.filter((value,index) =>{
    if (index%2 === 0) return 1;
    else return 0;
  });
  for (let i=0;i<collection.length;i++){
    if (collection.indexOf(number) !== -1){
      result = true;
    }
    else result = false;
  }
  return result;
};
module.exports = is_exist_element;
