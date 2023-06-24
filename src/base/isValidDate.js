import isDate from '@/base/isDate'

/**
 * 判断是否是一个合法的date
 * @param {any} val
 * @returns {boolean}
 */
function isValidDate(val) {
  return isDate(val) && !isNaN(val)
}

export default isValidDate
