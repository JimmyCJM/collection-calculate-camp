function count_same_elements(collection) {
  var result = new Array();
  var count = 1;
  var a = 0,c = 0;
  for (var i=0;i<collection.length;i++){
    if (collection[i].length != 1){
      c = parseInt(collection[i].split("-")[1]);
      collection[i] = collection[i].split("-")[0];
      var a = collection[i];
    }   //预处理
    if (collection[i] == collection[i+1]){
      count ++;
    }
    if (collection[i] != collection[i+1]){
      result.push({key:collection[i],count:count});
      //把多余计数的result弹出
      if (i == collection.length-1){
        result.pop();
      }
      count = 1;
    }
    if (collection[i] == a){
      result.push({key:collection[i],count:c});
    }
  }
  return result;
}

module.exports = count_same_elements;
