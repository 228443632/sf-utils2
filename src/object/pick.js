import isPlainObject from '@/base/isPlainObject'
import isString from '@/base/isString'
import deepClone from '@/object/deepClone'
import arrayToObj from '@/array/arrayToObj'
import hasOwn from '@/object/hasOwn'
import isArray from '@/base/isArray'
import isFunction from '@/base/isFunction'

/**
 * 创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性
 * @param {Object} obj
 * @param {string|String[]|Function} predicate
 * @version v3.0.4+
 * @return {{}|*|*[]}
 */
function pick(obj = {}, predicate) {
  if (!isPlainObject(obj)) return obj
  let innerObj = {}
  if (isString(predicate)) {
    // 字符串 切割,
    const splits = predicate.split(',').filter(Boolean)
    const splitsObj = arrayToObj(splits)
    Object.entries(obj).forEach(([k, v]) => {
      if (hasOwn(splitsObj, k)) innerObj[k] = v
    })
  } else if (isArray(predicate)) {
    // 数组
    const tempObj = arrayToObj(predicate)
    Object.entries(obj).forEach(([k, v]) => {
      if (hasOwn(tempObj, k)) innerObj[k] = v
    })
  } else if (isFunction(predicate)) {
    // 是方法
    Object.entries(obj).forEach(([k, v]) => {
      if (predicate(v, k)) innerObj[k] = v
    })
  } else {
    innerObj = obj
  }
  return deepClone(innerObj)
}

export default pick
