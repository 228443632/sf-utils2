import deepClone from '@/object/deepClone'
import isFunction from '@/base/isFunction'
import isPlainObject from '@/base/isPlainObject'
import isArray from '@/base/isArray'
import arrayToObj from '@/array/arrayToObj'
import { PlainObjectType } from '@/_helper/_types'

/**
 * @typedef {(value: any, key: string) => boolean} TPredicate 选项
 */

/**
 * @typedef {Object} THelperObjectFlattenOption 选项
 * @typedef {boolean} isDeepClone 是否深拷贝，默认值是true
 */
/**
 * 默认选项
 * @type {THelperObjectFlattenOption}
 */
export const THelperObjectFlattenOption = {
  isDeepClone: false
}

/**
 /**
 * 普通对象 平铺化flatten
 * @param {PlainObjectType} obj
 * @param {TPredicate} cb
 * @param {THelperObjectFlattenOption} [option]
 * @returns {*}
 * @private
 */
function _helperObjectFlatten(obj, cb, option) {
  const isDeepClone = option?.isDeepClone ?? true
  if (isDeepClone) obj = deepClone(obj)
  let isSkip = false // 是否跳过
  // 递归，核心逻辑
  const itor = (ob, parentField = '', result = []) => {
    if (isSkip) return []
    if (isPlainObject(ob)) {
      // 处理对象
      Object.entries(ob).some(([key, value]) => {
        let field = parentField ? `${parentField}.` : ''
        field = `${field}${key}`
        if (isSkip || (isFunction(cb) && (isSkip = cb(value, field)) === true)) {
          return false
        }
        itor(value, field, result)
        result.push({ key: field, value })
      })
    } else if (isArray(ob)) {
      // 处理数组
      ob.some((v, vi) => {
        const field = `${parentField}[${vi}]`
        if (isSkip || (isFunction(cb) && (isSkip = cb(v, field)) === true)) {
          return false
        }
        if (isPlainObject(v) || isArray(v)) {
          itor(v, field, result)
        }
        result.push({ key: field, value: v })
      })
    }
    return result
  }
  // 转成对象
  return arrayToObj(itor(obj), 'key')
}

export default _helperObjectFlatten
