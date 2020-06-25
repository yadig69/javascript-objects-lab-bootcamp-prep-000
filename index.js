function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object, {[key]:value})
  // object[key] = value
  return object
}