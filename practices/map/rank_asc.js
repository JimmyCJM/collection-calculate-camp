'use strict';
var rank_asc = function(collection){
  return collection.sort(CompareForSort);
};
function CompareForSort(first, second)
{
  if (first == second)
    return 0;
  if (first < second)
    return 1;
  else
    return -1;
}

module.exports = rank_asc;
