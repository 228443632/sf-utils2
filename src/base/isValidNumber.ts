import isNumber from './isNumber'

/**
 * 判断是否合法的是数字
 * @param {any} val
 * @returns {boolean}
 */
function isValidNumber(val) {
  return isNumber(val) && !Number.isNaN(val)
}

export default isValidNumber
