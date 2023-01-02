/**
 * 定义属性
 * @param {Object} obj
 * @param {Object} value
 * @returns {*}
 * @example
 * let obj = {}
 *
 * defs(obj, {id: 123, name: '蔡徐坤'})
 * => 输出
 * {id: 123, name: '蔡徐坤'}
 *
 *
 */
function defs(obj = {}, value = {}) {
  return Object.defineProperties(
    obj,
    Object.entries(value).reduce((pre, [k, v]) => {
      pre[k] = {
        configurable: true,
        enumerable: false,
        writable: true,
        ...v
      }
      return pre
    }, {})
  )
}

export default defs
