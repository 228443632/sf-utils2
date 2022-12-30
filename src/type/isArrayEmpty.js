import isArray from './isArray'

/**
 * 判断数组是否为空
 * @param {any} arg
 * @returns {boolean}
 */
function isArrayEmpty(arg) {
  return isArray(arg) && arg.length == 0
}

export default isArrayEmpty
