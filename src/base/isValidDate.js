import isDate from 'sf-utils2/base/isDate'
import isNullable from 'sf-utils2/base/isNullable'

/**
 * 判断是否是一个合法的date
 * @param {any} val
 * @returns {boolean}
 * @deprecated
 */
function isValidDate(val) {
  if (isNullable(val)) return false
  return isDate(new Date(val))
}

export default isValidDate
