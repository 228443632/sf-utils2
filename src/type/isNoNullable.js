/**
 * 是否 非undefined 或 null
 * @param {any} v
 * @returns {boolean}
 */
function isNoNullable(v) {
  return v !== undefined && v !== null
}

export default isNoNullable()
