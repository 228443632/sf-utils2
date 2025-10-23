import isString from 'sf-utils2/base/isString'
import isFunction from 'sf-utils2/base/isFunction'
import arrayToMap from 'sf-utils2/array/arrayToMap'
import uniq from 'sf-utils2/array/uniq'

/**
 * @typedef {function(any, any):boolean|number} ConditionFn
 */
/**
 * 比较两数组之间值的不同，存在数组1中，不存在数组2中
 * 本质上是求出哪些是删除的
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @param {string|ConditionFn} [condition] 条件
 * @returns {*[]}
 */
function differenceBy(array1, array2, condition) {
  const result = []
  if (!condition) {
    // 无条件
    let array1Map = arrayToMap(array1)
    let array2Map = arrayToMap(array2)
    array1Map.forEach((v, k) => {
      if (!array2Map.has(k)) {
        result.push(v)
      }
    })
  } else if (isString(condition)) {
    // 是有条件 且是字符串
    const arrayToMapOpts = { valueType: 'array' }
    let array1Map = arrayToMap(array1, condition, arrayToMapOpts)
    let array2Map = arrayToMap(array2, condition, arrayToMapOpts)
    array1Map.forEach((v, k) => {
      if (!array2Map.has(k)) {
        result.push(...v)
      }
    })
  } else if (isFunction(condition)) {
    // 是有条件 且是方法
    array1.forEach(a =>
      array2.forEach(b => {
        if (!!condition(a, b)) {
          result.push(a)
          return true
        }
        return false
      })
    )
  }
  return uniq(result)
}

export default differenceBy

/**
 * @example
 */
// console.log(differenceBy([3.1, 2.2, 1.3], [3.1, 4.4, 2.5, 1.3], (a, b) => a === b))
// // => [3.1, 1.3]
//
// console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x'))
// // => [{ 'x': 2 }]
