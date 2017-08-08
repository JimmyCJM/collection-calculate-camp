'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(value =>  {
    if (value < 27) return String.fromCharCode(value+96);
    else return String.fromCharCode(value/26+96) + String.fromCharCode(value%26+96);
});
};

module.exports = number_map_to_word_over_26;
