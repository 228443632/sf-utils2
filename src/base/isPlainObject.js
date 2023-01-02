import _typeof from '@/base/_typeof'

/**
 * 判断是否是一个普通对象
 * @param {any} val
 * @returns {boolean}
 */
function isPlainObject(val) {
  return _typeof(val) === 'Object'
}

export default isPlainObject
