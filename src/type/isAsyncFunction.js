/**
 * 判断是否是异步方法
 * @param {any} arg
 * @returns {boolean}
 */
function isAsyncFunction(arg) {
  return Object.prototype.toString.call(arg) === '[object AsyncFunction]'
}

export default isAsyncFunction
