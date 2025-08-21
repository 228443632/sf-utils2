import _typeof from '@/base/_typeof'

/**
 * 判断是否是promise
 * @param {any} val
 * @returns {boolean}
 */
function isSet(val) {
  return _typeof(val) === 'Set'
}

export default isSet
