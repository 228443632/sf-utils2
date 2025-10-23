import isPlainObject from 'sf-utils2/base/isPlainObject.js'
import isArray from 'sf-utils2/base/isArray'
import isFunction from 'sf-utils2/base/isFunction'
import def from 'sf-utils2/object/def'

/**
 * 转换键名
 * @param {string} key 键名
 * @private
 * @return {string}
 */
const __transformFunc = key => key

/**
 * 将某个对象或数组里的所有的对象属性转成，对应transformFunc值
 * @param data 原对象 {object | array}
 * @param transformFunc 转换key函数 可选值 默认值 undefined {boolean|function}
 * @returns {{}}
 */
function transformObjectKeys({ data = {}, transformFunc = __transformFunc }) {
  if (!isFunction(transformFunc)) return data
  // 先转换
  const _convert = data => {
    if (!isFunction(transformFunc)) return data
    if (isPlainObject(data)) {
      Object.keys(data).forEach(key => {
        const upperKey = transformFunc(key)
        if (upperKey != key) def(data, key)
        data[upperKey] = data[key]
        _convert(data[upperKey])
      })
    } else if (isArray(data)) {
      data.forEach(_convert)
    }
    return data
  }
  const _data = _convert(data)
  return JSON.parse(JSON.stringify(_data))
}

export default transformObjectKeys
