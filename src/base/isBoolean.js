import _typeof from '@/base/_typeof'

/**
 * 判断是否是boolean
 * @param {any} val
 * @returns {boolean}
 */
function isBoolean(val) {
  return _typeof(val) === 'Boolean'
}

export default isBoolean
