/**
 * 判断是否是普通方法【同步】
 * @param {any} arg
 * @returns {boolean}
 */
function isFunction(arg) {
  return Object.prototype.toString.call(arg) === '[object Function]'
}

export default isFunction
