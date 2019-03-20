/**
 * Checks if value is an Object
 * @param {*} value
 * @returns {Boolean}
 */
const isObject = value => {
  if (!value) {
    return false
  }

  return value.constructor === Object
}

module.exports = isObject
