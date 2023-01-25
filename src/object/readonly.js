/**
 * 设置属性，不可修改
 * @param {Object} obj
 * @param {string} key
 * @param {*} val
 * @param {boolean} writable
 * @version v3.0.11+
 * @returns {*}
 */
function readonly(obj, key, val = undefined, writable = false) {
  const attribute = {
    writable: !!writable
  }
  if (val !== undefined) attribute.value = val
  return Object.defineProperty(obj, key, attribute)
}

export default readonly
