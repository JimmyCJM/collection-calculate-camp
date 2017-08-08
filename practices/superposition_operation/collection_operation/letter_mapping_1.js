'use strict';

function even_to_letter(collection) {
  return collection.filter(value => {
    if (value%2 === 0) return 1;
    else return 0;
  }).map(value => {
    if (value%2 === 0) return String.fromCharCode(value+96);
  })
}

module.exports = even_to_letter;
