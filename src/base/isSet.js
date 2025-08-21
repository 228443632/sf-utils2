import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是promise
 * @param {any} val
 * @returns {boolean}
 */
function isSet(val) {
  return _typeof(val) === 'Set'
}

export default isSet
