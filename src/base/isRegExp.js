import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是 正则
 * @param {*} val
 * @returns {boolean}
 */
function isRegExp(val) {
  return _typeof(val) === 'RegExp'
}

export default isRegExp
