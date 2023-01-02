/**
 * 是否 非undefined 或 null
 * @param {any} val
 * @returns {boolean}
 */
function isNoNullable(val) {
  return val !== undefined && val !== null
}

export default isNoNullable
