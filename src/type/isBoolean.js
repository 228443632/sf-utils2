/**
 * 判断是否是boolean
 * @param {any} arg
 * @returns {boolean}
 */
function isBoolean(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1) === 'Boolean'
}

export default isBoolean
