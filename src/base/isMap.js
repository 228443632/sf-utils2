import _typeof from '@/base/_typeof'

/**
 * 判断是否是一个Map对象
 * @param {any} val
 * @returns {boolean}
 */
function isMap(val) {
  return _typeof(val) === 'Map'
}

export default isMap
