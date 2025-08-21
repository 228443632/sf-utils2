import _typeof from '@/base/_typeof'

/**
 * 判断是否是数字
 * @param {any} val
 * @returns {boolean}
 */
function isNumber(val) {
  return _typeof(val) === 'Number'
}

export default isNumber
