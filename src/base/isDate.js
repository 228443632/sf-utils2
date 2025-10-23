import _typeof from 'sf-utils2/base/_typeof'

/**
 * 判断是否是date
 * @param val
 * @returns {boolean}
 */
function isDate(val) {
  return _typeof(val) === 'Date' && val != 'Invalid Date'
}

export default isDate
