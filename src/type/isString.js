/**
 * 是否是字符串
 * @param {any} arg
 * @returns {boolean}
 */
function isString(arg) {
  return Object.prototype.toString.call(arg) === '[object String]'
}

export default isString
