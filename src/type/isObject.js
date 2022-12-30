/**
 * 是否是对象
 * @param {any} arg
 * @returns {boolean}
 */
function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

export default isObject
