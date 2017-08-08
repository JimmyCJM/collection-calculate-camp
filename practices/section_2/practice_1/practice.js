function count_same_elements(collection) {
  var result = new Array();
  var n = 0,count = 1;
  for (var i=0;i<collection.length;i++){

    if(collection[i] == collection[i+1]){
      count++;
    }
    else {
      result.push({key:collection[i],count:count});
      count = 1;
      n++;
    }
  }
  return result;
}


module.exports = count_same_elements;
