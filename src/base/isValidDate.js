import isDate from '@/base/isDate'
import isNullable from '@/base/isNullable'

/**
 * 判断是否是一个合法的date
 * @param {any} val
 * @returns {boolean}
 *
 */
function isValidDate(val) {
  if (isNullable(val)) return false
  return isDate(new Date(val))
}

export default isValidDate
