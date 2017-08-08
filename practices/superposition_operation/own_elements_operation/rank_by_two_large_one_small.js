'use strict';
function rank_by_two_large_one_small(collection) {
  collection = collection.sort(compare);
  for (let i = 0; i < collection.length; i++) {
    if (parseInt(i % 3) === 0 && i + 2 < collection.length) {
      collection[i] = collection[i] ^ collection[i + 2];
      collection[i + 2] = collection[i] ^ collection[i + 2];
      collection[i] = collection[i] ^ collection[i + 2];
    }
  }
}
function compare(first,second) {
  if(first === second) return 0;
  if(first > second) return 1;
  if(first < second)  return-1;
}
module.exports = rank_by_two_large_one_small;
