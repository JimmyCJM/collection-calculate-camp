'use strict';

function hybrid_operation(collection) {
  return collection.reduce((p,value) => {
    return p+=value*3+2;
  },0)
}

module.exports = hybrid_operation;

