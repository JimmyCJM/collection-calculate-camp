function count_same_elements(collection) {
  var result = new Array();
  var c = new Array();
  var count = 1;
  var a = new Array();
  for (var i=0;i<collection.length;i++) {
    if (collection[i].length != 1) {
      c.push(parseInt(collection[i].replace(/[^0-9]/ig, "") - 1));
      collection[i] = collection[i].split("")[0];
      a.push(collection[i]);
    }
  } //预处理
  for(var i=0;i<collection.length;i++){
    if (collection[i] == collection[i+1]){
      count ++;
    }
    if (collection[i] != collection[i+1]){
      result.push({key:collection[i],count:count});
      count = 1;
    }
  }
//计算字母个数和
  for (var i=0;i<result.length;i++){
    for (var j=0;j<a.length;j++){
      if(result[i].key == a[j]){
        result[i].count = result[i].count + c[j];
      }
    }
  }//补上特殊表示字母的个数
  return result;
}

module.exports = count_same_elements;
