/**
 * 获取数据类型
 * @param {any} val
 * @returns {string}
 */
function _helperTypeof(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

export default _helperTypeof
