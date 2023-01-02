import _typeof from '@/base/_typeof'

/**
 * 是否是字符串
 * @param {any} val
 * @returns {boolean}
 */
function isString(val) {
  return _typeof(val) === 'String'
}

export default isString
