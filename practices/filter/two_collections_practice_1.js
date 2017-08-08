'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(value => {
    if(collection_b.includes(value)) return 1;
    else return 0;
  });
}

module.exports = choose_common_elements;
