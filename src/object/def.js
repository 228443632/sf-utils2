/**
 * 定义属性
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} enumerable
 * @returns {*}
 * @example
 *
 * let person = {name: '蔡徐坤'}
 * def(person, 'age', '100')
 */
function def(obj, key, val = undefined, enumerable = false) {
  const attribute = {
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  }
  if (val !== undefined) attribute.value = val
  return Object.defineProperty(obj, key, attribute)
}

export default def
