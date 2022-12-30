/**
 * 判断是否是 null或undefined
 * @param {any} v
 * @returns {boolean}
 */
function isNullable(v) {
  return v === undefined || v === null
}

export default isNullable
