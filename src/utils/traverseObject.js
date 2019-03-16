const isObject = require("./isObject")

/**
 * This function will step through an object and apply a given function
 *
 * @param {Object} obj Object to be traversed
 * @param {Function} fn function to be applied to every key with "Description in it"
 * @returns {Object} New object with transformed keys
 */
function traverseObject(obj = {}, fn = (x) => x) {
  if (!isObject(obj)) {
    throw new Error(`first param must be an object. ${obj.contructor} given`)
  }

  const data = {}

  Object.keys(obj).forEach(key => {
    const value = obj[key]
    data[key] = value

    if (Array.isArray(value)) {
      data[key] = value.map(item => {
        if (isObject(item)) {
          return traverseObject(item, fn)
        }
        return item
      })
    }

    if (isObject(value)) {
      data[key] = traverseObject(value, fn)
    }

    if (typeof key === "string" && key.includes("Description")) {
      data[key] = fn(value)
    }
  })

  return data
}

module.exports = traverseObject
