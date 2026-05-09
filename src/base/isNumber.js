import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是数字 合法的
 * @param {any} val
 * @returns {boolean}
 */
function isNumber(val) {
  return _typeof(val) === 'Number' && !isNaN(val) && val !== Infinity && val !== -Infinity
}

export default isNumber
