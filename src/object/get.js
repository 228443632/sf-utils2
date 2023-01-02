import _helperObjectFlatten from '@/_helper/_helperObjectFlatten'

/**
 * 获取对象的属性的值，如果值为 undefined，则返回默认值
 * @param {Object} obj
 * @param {String} property
 * @param {Any} defaultValue
 * @returns {*}
 */
function get(obj, property, defaultValue) {
  let result
  _helperObjectFlatten(obj, (value, field) => {
    if (field === property) {
      result = value
      return true
    }
  })
  return result || defaultValue
}

export default get
