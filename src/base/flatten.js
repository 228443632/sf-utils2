import isObject from '../type/isObject.js'
import isArray from '../type/isArray.js'
import isFunction from '../type/isFunction.js'

/**
 * 将对象进行扁平化
 * @param {Object} obj
 * @param {Function} cb 回调函数
 * @returns {*}
 */

function flatten(obj, cb) {
  // 递归，核心逻辑
  const itor = (ob, parentField = '', result = []) => {
    isFunction(cb) && (ob = cb(ob, parentField, obj))
    if (isObject(ob)) {
      // 处理对象
      Object.entries(ob).forEach(([key, value]) => {
        if (isObject(value)) {
          const field = parentField ? `${parentField}.` : ''
          itor(value, `${field}${key}`, result)
        } else if (isArray(value)) {
          itor(value, `${parentField}${key}`, result)
        } else {
          const field = parentField ? `${parentField}.` : ''
          result.push({ key: `${field}${key}`, value })
        }
      })
    } else if (isArray(ob)) {
      // 处理数组
      ob.forEach((v, vi) => {
        const field = `${parentField}[${vi}]`
        if (isObject(v) || isArray(v)) {
          itor(v, field, result)
        } else {
          result.push({ key: field, value: v })
        }
      })
    }
    return result
  }
  // 转成对象
  return itor(obj).reduce((pre, cur) => ({ ...pre, [cur.key]: cur.value }), {})
}

export default flatten
