import isPlainObject from 'sf-utils2/base/isPlainObject'
import isString from 'sf-utils2/base/isString'
import deepClone from 'sf-utils2/object/deepClone'
import arrayToObj from 'sf-utils2/array/arrayToObj'
import hasOwn from 'sf-utils2/object/hasOwn'
import isArray from 'sf-utils2/base/isArray'
import isFunction from 'sf-utils2/base/isFunction'

/**
 * @typedef {(value: any, key: string) => boolean} TPredicate 回到函数
 */

/**
 * @typedef {Object} THelperObjectFlattenOption 选项
 * @property {boolean} isDeepClone 是否深拷贝，默认值是true
 */
/**

/**
 * 创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性
 * @param {Object} obj
 * @param {string|String[]|TPredicate} predicate
 * @param {THelperObjectFlattenOption} [option] 选项
 * @version v3.0.4+
 * @return {{}|*|*[]}
 */
function pick(obj = {}, predicate, option) {
  const isDeepClone = option?.isDeepClone ?? true
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
  return isDeepClone ? deepClone(innerObj) : innerObj
}

export default pick
