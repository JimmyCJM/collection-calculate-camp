function create_updated_collection(collection_a, object_b) {
  var arr = [];
  var result = [];
  let count = 0;
  collection_a.push(0);
  for(let i=0;i<collection_a.length-1;i++){
    if (collection_a[i] === collection_a[i+1]) count++;
    else {
      arr.push({key:collection_a[i],count});
      count = 1;
    }
  }

  var a = arr.pop();
  arr.push({key:a.key.split("-")[0], count:parseInt(a.key.split("-")[1])});

  arr.forEach(value =>{
    if(object_b.value.indexOf(value.key) === -1) result.push(value);
    else{
      for (let i=0;i<object_b.value.length;i++){
        if(value.key === object_b.value[i]) result.push({key:value.key, count:value.count - parseInt(value.count/3)});
      }
    }
  })
  return result;
}

module.exports = create_updated_collection;
