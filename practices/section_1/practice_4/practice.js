function collect_same_elements(collection_a, object_b) {
  var result = new Array();
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<object_b.value.length;j++){
      if(collection_a[i] == object_b.value[j]){
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
