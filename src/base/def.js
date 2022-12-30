/**
 * 定义属性
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} enumerable
 * @returns {*}
 */
function def(obj, key, val = undefined, enumerable = false) {
  return Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

export default def
