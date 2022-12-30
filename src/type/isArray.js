/**
 * 判断是否是array 数组
 * @param arg
 * @returns {boolean}
 */
function isArray(arg) {
  return Array.isArray ? Array.isArray(arg) : Object.prototype.toString.call(arg).slice(8, -1) === 'Array'
}

export default isArray
