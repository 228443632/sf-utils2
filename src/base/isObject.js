/**
 * 是否 Object 对象
 * @param {any} val
 * @returns {boolean}
 */
function isPlainObject(val) {
  return typeof val === 'object'
}

export default isPlainObject
