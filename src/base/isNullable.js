/**
 * 判断是否是 null或undefined
 * @param {any} val
 * @returns {boolean}
 */
function isNullable(val) {
  return val === undefined || val === null
}

export default isNullable
