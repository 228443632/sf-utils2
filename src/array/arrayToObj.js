import isArray from '@/base/isArray'
import isFunction from '@/base/isFunction'
import { getPropValue } from '@/array/arrayToMap'
import isNullable from '@/base/isNullable'


/**
 * 将数组转成obj
 * @param {any[]} array 数组
 * @param {string|Function|string[]} [property] 主键
 * @param {{valueType: 'object' | 'array', retainKeyWithNull?: boolean}} [options] 是否保留未定义的属性值
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

function arrayToObj(array = [], property, options = { valueType: 'object', retainKeyWithNull: false }) {
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
        let value = getPropValue(cur, property)
        if (options.retainKeyWithNull && isNullable(value)) value = 'undefined'
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
      if (options.retainKeyWithNull && isNullable(value)) cur = 'undefined'
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

/**
 * @example
 */

/**
// 多个属性名
const list = [
  { empId: 1, empName: '蔡徐坤' },
  { empId: 2, empName: '小明' },
  { empId: 3, empName: '蔡徐坤' },
]
console.log(arrayToObj(list, ['empId', 'empName']))
// =>
// {
//   1|蔡徐坤: {empId: 1, empName: '蔡徐坤'},
//   2|小明: {empId: 2, empName: '小明'}
//   3|蔡徐坤: {empId: 3, empName: '蔡徐坤'}
// }


// 单个属性名
const list2 = [
  { empId: 1, empName: '蔡徐坤' },
  { empId: 2, empName: '小明' },
  { empId: 3, empName: '蔡徐坤' },
]
console.log(arrayToObj(list2, 'empId'))
// =>
// {
//   1: {empId: 1, empName: '蔡徐坤'},
//   2: {empId: 2, empName: '小明'}
//   3: {empId: 3, empName: '蔡徐坤'}
// }

const list3 = [1, 2, 3, '4']
console.log(arrayToObj(list3));
// =>
// {
//   1: 1
//   2: 2,
//   3: 3,
//   4: '4'
// }
*/
