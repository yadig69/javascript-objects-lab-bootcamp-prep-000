function updateObjectWithKeyAndValue(object, key, value) {
  // var clone = Object.assign({}, object, {[key]:value})
  // object[key] = value
  var clone = Object.assign({}, object)
  clone[key] = value
  return clone
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}