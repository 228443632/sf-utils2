/**
 * 判断是否是数字
 * @param {any} arg
 * @returns {boolean}
 */
function isNumber(arg) {
  return Object.prototype.toString.call(arg) === '[object Number]'
}

export default isNumber
