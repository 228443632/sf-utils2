import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是普通方法【同步】
 * @param {any} val
 * @returns {boolean}
 */
function isSyncFunction(val) {
  return _typeof(val) === 'Function'
}

export default isSyncFunction
