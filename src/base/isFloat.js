import isNumber from './isNumber'

/**
 * 判断是否小数
 * @param {any} val
 */
function isFloat(val) {
  return isNumber(val) && val % 1 !== 0
}

export default isFloat
