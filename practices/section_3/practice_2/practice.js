function create_updated_collection(collection_a, object_b) {
  var result = new Array();
  collection_a.forEach(value =>{
    if (object_b.value.includes(value.key)) result.push({key:value.key, count:value.count - parseInt(value.count/3)});
    else result.push({key:value.key, count:value.count});
  });
  return result;
}

module.exports = create_updated_collection;
