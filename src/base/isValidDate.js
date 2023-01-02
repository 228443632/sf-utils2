import isDate from '@/base/isDate'

/**
 * 判断是否是一个WeakMap对象
 * @param {any} val
 * @returns {boolean}
 */
function isValidDate(val) {
  return isDate(val) && !isNaN(val)
}

export default isValidDate
