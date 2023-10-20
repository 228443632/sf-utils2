import _typeof from '@/base/_typeof'

/**
 * 判断是否是 正则
 * @param {*} val
 * @returns {boolean}
 */
function isRegExp(val) {
  return _typeof(val) === 'RegExp'
}

export default isRegExp
