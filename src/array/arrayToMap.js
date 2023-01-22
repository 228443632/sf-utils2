import isArray from '@/base/isArray'
import isFunction from '@/base/isFunction'

/**
 * 将数组转成Map类型
 * @param {Object[]} array 数组
 * @param {String|Function} property 主键
 * @param {{valueType: 'object' | 'array'}} options
 * @return {Map<any, any>|{}|*}
 * @example
 *
 * const list = [
 *  {empId: 1, empName: '蔡徐坤'},
 *  {empId: 2, empName: '小明'}
 * ]
 * arrayToMap(list, 'empId')
 * =>
   [[Entries]]
    0: {1 => Object}
    1: {2 => Object}
   size:2
 *
 * const list = [
 *  1, 2, 3, '4'
 * ]
 * arrayToMap(list)
   =>
   [[Entries]]
   0: {1 => 1}
   1: {2 => 2}
   2: {3 => 3}
   3: {'4' => '4'}
   size:4
 *
 */
function arrayToMap(array = [], property, options = { valueType: 'object' }) {
  if (isArray(array)) {
    // 如果property是Function
    if (isFunction(property)) {
      const map = new Map()
      array.forEach((v, vi) => property(map, v, vi))
      return map
    }
    const valueType = String(options?.valueType).toLowerCase() || 'object'
    // 非Function，且property存在
    if (property) {
      return array.reduce((pre, cur) => {
        const value = cur?.[property]
        if (value) {
          if (valueType === 'array') {
            if (!isArray(pre.get(value))) pre.set(value, [])
            pre.get(value).push(cur)
          } else {
            pre.set(value, cur)
          }
        }
        return pre
      }, new Map())
    }
    // property不存在时
    return array.reduce((pre, cur) => {
      if (cur) {
        if (valueType === 'array') {
          if (!isArray(pre.get(cur))) pre.set(cur, [])
          pre.get(cur).push(cur)
        } else {
          pre.set(cur, cur)
        }
      }
      return pre
    }, new Map())
  }
  return new Map()
}
export default arrayToMap
