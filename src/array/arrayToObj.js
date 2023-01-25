import isArray from '@/base/isArray'
import isFunction from '@/base/isFunction'

/**
 * 将数组转成obj
 * @param {Object[]} array 数组
 * @param {string|Function} property 主键
 * @param {{valueType: 'object' | 'array'}} options
 * @returns {*}
 * @example
 *
 * const list = [
 *  {empId: 1, empName: '蔡徐坤'},
 *  {empId: 2, empName: '小明'}
 * ]
 * arrayToObj(list, 'empId')
 * =>
 * {
 *   1: {empId: 1, empName: '蔡徐坤'},
 *   2: {empId: 2, empName: '小明'}
 * }
 *
 * const list = [
 *  1, 2, 3, '4'
 * ]
 * arrayToObj(list)
 * =>
 * {
 *   1: 1
 *   2: 2,
 *   3: 3,
 *   4: '4'
 * }
 *
 */

function arrayToObj(array = [], property, options = { valueType: 'object' }) {
  if (isArray(array)) {
    // 如果property是Function
    if (isFunction(property)) {
      const object = {}
      array.forEach((v, vi) => property(object, v, vi))
      return object
    }
    const valueType = String(options?.valueType).toLowerCase() || 'object'
    // 非Function，且property存在
    if (property) {
      return array.reduce((pre, cur) => {
        const value = cur?.[property]
        if (value) {
          if (valueType === 'array') {
            if (!isArray(pre[value])) pre[value] = []
            pre[value].push(cur)
          } else {
            pre[value] = cur
          }
        }
        return pre
      }, {})
    }
    // property不存在时
    return array.reduce((pre, cur) => {
      if (cur) {
        if (valueType === 'array') {
          if (!isArray(pre[cur])) pre[cur] = []
          pre[cur].push(cur)
        } else {
          pre[cur] = cur
        }
      }
      return pre
    }, {})
  }
  return {}
}
export default arrayToObj
