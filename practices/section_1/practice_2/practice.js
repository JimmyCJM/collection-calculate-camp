function collect_same_elements(collection_a, collection_b) {
  var result = new Array();
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      for (var k=0;k<collection_b[j].length;k++){
        if(collection_a[i] == collection_b[j][k]){
          result.push(collection_a[i]);
        }
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
