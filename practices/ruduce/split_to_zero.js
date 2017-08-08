'use strict';

function split_to_zero(number, interval) {
  var result = new Array();
  result.push(number);
  do {
    number = parseFloat((number - interval).toFixed(1));
    result.push(number);
  }
  while(number > 0)
  return result;
}

module.exports = spilt_to_zero;
