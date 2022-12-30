import isObject from '../type/isObject.js'
import isArray from '../type/isArray'

/**
 * 将某个对象或数组里的所有的对象属性转成 大写或者小写
 * @param {object | array} data
 * @param {boolean} toLowerCase 是否转成小写  可选值 true false 默认值 true
 * @returns {{}}
 */
function convertObjFieldToLower({ data = {}, toLowerCase = true }) {
  // 先转换
  const convertObj = ({ data = {}, toLowerCase = true }) => {
    if (isObject(data)) {
      Object.keys(data).forEach(key => {
        const upperKey = toLowerCase ? String.prototype.toLowerCase.call(key) : String.prototype.toUpperCase.call(key)
        data[upperKey] = JSON.parse(JSON.stringify(data[key]))
        convertObjFieldToLower({ data: data[upperKey], toLowerCase })
      })
    } else if (isArray(data)) {
      data.forEach(v => {
        convertObjFieldToLower({ data: v, toLowerCase })
      })
    }
    return data
  }

  // 删除之前的键名
  const delObjField = ({ data = {}, toLowerCase = true }) => {
    if (isObject(data)) {
      Object.keys(data).forEach(key => {
        const upperKey = toLowerCase ? String.prototype.toLowerCase.call(key) : String.prototype.toUpperCase.call(key)
        if (upperKey != key) {
          delete data[key]
        }
      })
    } else if (isArray(data)) {
      data.forEach(v => {
        delObjField({ data: v, toLowerCase })
      })
    }
    return data
  }
  const _data = convertObj({ data, toLowerCase })
  return delObjField({ data: _data, toLowerCase })
}

export default convertObjFieldToLower
