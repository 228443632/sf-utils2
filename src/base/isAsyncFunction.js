import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是异步方法
 * @param {any} val
 * @returns {boolean}
 */
function isAsyncFunction(val) {
  return _typeof(val) === 'AsyncFunction'
}

export default isAsyncFunction
