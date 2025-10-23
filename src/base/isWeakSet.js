import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是一个WeakSet对象
 * @param {any} val
 * @returns {boolean}
 */
function isWeakSet(val) {
  return _typeof(val) === 'WeakSet'
}

export default isWeakSet
