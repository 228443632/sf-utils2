import isNumber from './isNumber'

/**
 * 判断是否整数
 * @param {any} val
 */
function isInteger(val) {
  return isNumber(val) && val % 1 === 0
}

export default isInteger
