import _typeof from '@/base/_typeof'

/**
 * 判断是否是date
 * @param val
 * @returns {boolean}
 */
function isDate(val) {
  return _typeof(val) === 'Date'
}

export default isDate
