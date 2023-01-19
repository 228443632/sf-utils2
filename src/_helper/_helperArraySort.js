/**
 * 生序
 * @param {Number|String} a
 * @param {Number|String} b
 * @return {number}
 * @private
 */
export function _helperAse(a, b) {
  return a < b ? -1 : 1
}

/**
 * 降序
 * @param {Number|String} a
 * @param {Number|String} b
 * @return {number}
 * @private
 */
export function _helperDesc(a, b) {
  return a < b ? 1 : -1
}

export default {
  _helperAse,
  _helperDesc
}
