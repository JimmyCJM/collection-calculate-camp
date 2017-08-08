'use strict';

function median_to_letter(collection) {
  var a =0;
  if(collection.length/2 === 0) a = collection[collection.length/2+1];
  else a = collection[Math.ceil(collection.length/2)];
  return a.fromCharCode(a/26+96)+String.fromCharCode(a%26+96);
}

module.exports = median_to_letter;
