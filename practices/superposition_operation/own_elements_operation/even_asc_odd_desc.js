'use strict';
var even_asc_odd_desc = function(collection){
  let collection_a = collection.filter(value => {
    if(value%2 === 0) return 1;
    else return 0;
  });
  let collection_b = collection.filter(value => {
    if(value%2 === 0) return 0;
    else return 1;
  })
  collection_a = collection_a.sort(asc);
  collection_b = collection_b.sort(dec);
  collection_a = collection_a.concat(collection_b);
  return  collection_a;
};

function asc(first,second) {
  if(first === second) return 0;
  if(first > second)  return 1;
  if(first < second)  return -1;
}
function dec(first,second) {
  if(first === second) return 0;
  if(first > second)  return -1;
  if(first < second)  return 1;
}
module.exports = even_asc_odd_desc;
