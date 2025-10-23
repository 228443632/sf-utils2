import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是一个普通对象
 * @param {any} val
 * @returns {boolean}
 */
function isPlainObject(val) {
  return _typeof(val) === 'Object'
}

export default isPlainObject
