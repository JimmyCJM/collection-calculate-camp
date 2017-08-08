'use strict';
var single_element = function(collection){
  var result = [];
  var del = [];
  collection.filter((value,index) => {
    if (index%2 === 1) return 1;
    else return 0;
  }).forEach(value => {
    if (result.indexOf(value) === -1) result.push(value);
    else del.push(result.indexOf(value));
  })
  del.forEach(value => {
    result.splice(value,1);
  })
  return result;
};
module.exports = single_element;
