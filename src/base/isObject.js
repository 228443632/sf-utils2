/**
 * 是否 Object 对象
 * @param {any} val
 * @returns {boolean}
 */
function isPlainObject(val) {
  return val !== null && typeof val === 'object'
}

export default isPlainObject
