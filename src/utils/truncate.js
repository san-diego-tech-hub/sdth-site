/**
 * This will truncate the text and add ... if text lenght is longer than
 * the length param.
 *
 * @param {String} [text] String to be truncated
 * @param {Number} [length] Truncate after this length
 */
export default (text = '', length = 100) =>
  text.length > length ? text.substr(0, length) + '...' : text
