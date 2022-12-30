/**
 * 是否是null
 * @param {any} arg
 * @returns {boolean}
 */
function isNull(arg) {
  return Object.prototype.toString.call(arg) === '[object Null]'
}

export default isNull
