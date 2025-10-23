import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是array 数组
 * @param val
 * @returns {boolean}
 */
function isArray(val) {
  return Array.isArray ? Array.isArray(val) : _typeof(val) === 'Array'
}

export default isArray
