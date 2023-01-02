import _typeof from '@/base/_typeof'

/**
 * 判断是否是一个WeakMap对象
 * @param {any} val
 * @returns {boolean}
 */
function isWeakMap(val) {
  return _typeof(val) === 'WeakMap'
}

export default isWeakMap
