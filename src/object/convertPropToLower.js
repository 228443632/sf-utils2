import isPlainObject from '@/base/isPlainObject.js'
import isArray from '@/base/isArray'

/**
 * 将某个对象或数组里的所有的对象属性转成 大写或者小写
 * @param data 原对象 {object | array}
 * @param toLowerCase 是否转成小写  可选值 true false 默认值 true {boolean}
 * @returns {{}}
 */
function convertPropToLower({ data = {}, toLowerCase = true }) {
  // 先转换
  const convertObj = ({ data = {}, toLowerCase = true }) => {
    if (isPlainObject(data)) {
      Object.keys(data).forEach(key => {
        const upperKey = toLowerCase ? String.prototype.toLowerCase.call(key) : String.prototype.toUpperCase.call(key)
        data[upperKey] = JSON.parse(JSON.stringify(data[key]))
        convertPropToLower({ data: data[upperKey], toLowerCase })
      })
    } else if (isArray(data)) {
      data.forEach(v => {
        convertPropToLower({ data: v, toLowerCase })
      })
    }
    return data
  }

  // 删除之前的键名
  const delObjField = ({ data = {}, toLowerCase = true }) => {
    if (isPlainObject(data)) {
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

export default convertPropToLower
