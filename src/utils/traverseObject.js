const isObject = require("./isObject")

/**
 * This function will step through an object and apply a given function
 *
 * @param {Object} value Object to be traversed
 * @param {Function} fn function to be applied to every key with "Description in it"
 * @returns {Object} New object with transofrmed keys
 */
const traverseObject = (value = {}, fn = () => {}) => {
  if (!isObject(value)) {
    throw new Error(`first param must be an object. ${value.contructor} given`)
  }

  const data = {}

  Object.keys(value).forEach(key => {
    const item = value[key]
    data[key] = item

    if (Array.isArray(item)) {
      data[key] = item.map(j => {
        if (isObject(j)) {
          return traverseObject(j, fn)
        }
        return j
      })
    }

    if (isObject(item)) {
      data[key] = traverseObject(item, fn)
    }

    if (typeof key === "string" && key.includes("Description")) {
      data[key] = fn.apply(this, [item])
    }
  })

  return data
}

module.exports = traverseObject
