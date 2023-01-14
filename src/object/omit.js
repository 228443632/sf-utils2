import isPlainObject from '@/base/isPlainObject'
import isString from '@/base/isString'
import deepClone from '@/object/deepClone'
import arrayToObj from '@/array/arrayToObj'
import hasOwn from '@/object/hasOwn'
import isArray from '@/base/isArray'
import isFunction from '@/base/isFunction'

/**
 * 反向版  pick; 这个方法一个对象，这个对象由忽略属性之外的object自身和继承的可枚举属性组成。（注：可以理解为删除object对象的属性）。
 * @param {Object} obj
 * @param {String|String[]|Function} predicate
 * @return {{}|*|*[]}
 */
function omit(obj = {}, predicate) {
  if (!isPlainObject(obj)) return obj
  let innerObj = deepClone(obj)
  if (isString(predicate)) {
    // 字符串 切割,
    const splits = predicate.split(',').filter(Boolean)
    const splitsObj = arrayToObj(splits)
    Object.entries(obj).forEach(([k, v]) => {
      if (hasOwn(splitsObj, k)) delete innerObj[k]
    })
  } else if (isArray(predicate)) {
    // 数组
    const tempObj = arrayToObj(predicate)
    Object.entries(obj).forEach(([k, v]) => {
      if (hasOwn(tempObj, k))  delete innerObj[k]
    })
  } else if (isFunction(predicate)) {
    // 是方法
    Object.entries(obj).forEach(([k, v]) => {
      if (predicate(v, k)) delete innerObj[k]
    })
  }
  return innerObj
}

export default omit
