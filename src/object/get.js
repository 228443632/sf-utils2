import _helperObjectFlatten from '@/_helper/_helperObjectFlatten'

/**
 * 获取对象的属性的值，如果值为 undefined，则返回默认值
 * @param {Object} obj 对象
 * @param {string} property 属性
 * @param {*} [defaultValue] 默认值
 * @returns {*}
 */
function get(obj, property, defaultValue) {
  let result
  property = property.replace(/\.\[/g, '[')
  _helperObjectFlatten(obj, (value, field) => {
    if (field === property) {
      result = value
      return true
    }
  })
  return result || defaultValue
}

export default get
