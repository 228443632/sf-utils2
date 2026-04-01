// @ts-nocheck

import arrayToMap from 'sf-utils2/array/arrayToMap'
import isString from 'sf-utils2/base/isString'
import uniq from 'sf-utils2/array/uniq'
import isArray from 'sf-utils2/base/isArray'

/**
 * 比较两数组之间值的不同
 * 比如新增哪些数据、删除了哪些数据、
 * @param {Array} oldArrayValue 数组1 老
 * @param {Array} newArrayValue 数组2 新
 * @param {string|string[]} [condition] 条件
 * @returns {{delList: *[], addList: *[]}}
 */
function arrayDiff<T1 extends Array<any>, T2 extends Array<any>>(
  oldArrayValue: T1,
  newArrayValue: T2,
  condition: string | string[]
) {
  // 转化
  const newArray = oldArrayValue || []
  const oldArray = newArrayValue || []

  const addList = [], // 新增的数据
    delList = [] // 删除的数据
  if (!condition) {
    // 无条件
    let newArrayMap = arrayToMap(newArray)
    let oldArrayMap = arrayToMap(oldArray)
    newArrayMap.forEach((v, k) => {
      if (!oldArrayMap.has(k)) {
        // 删除
        delList.push(v)
      }
    })
    oldArrayMap.forEach((v, k) => {
      if (!newArrayMap.has(k)) {
        // 新增的
        addList.push(v)
      }
    })
  } else if (isString(condition) || isArray(condition)) {
    // 是有条件 且是字符串 或者是 字符串数组
    const arrayToMapOpts = { valueType: 'array', retainKeyWithNull: true }
    let newArrayMap = arrayToMap(newArray, condition, arrayToMapOpts)
    let oldArrayMap = arrayToMap(oldArray, condition, arrayToMapOpts)
    newArrayMap.forEach((v, k) => {
      if (!oldArrayMap.has(k)) {
        // 删除的
        delList.push(...v)
      }
    })

    oldArrayMap.forEach((v, k) => {
      if (!newArrayMap.has(k)) {
        // 新增的
        addList.push(...v)
      }
    })
  }
  return {
    addList: uniq(addList), // 新增的列表
    delList: uniq(delList) // 删除的列表
  }
}

export default arrayDiff

/**
 * @example
 */
/**
// 普通匹配
console.log(arrayDiff([3.1, 2.2, 1.3], [3.1, 4.4, 2.5, 1.3]))
// => { addList: [3.1, 1.3], delList: [2.2] }

// 传入属性diff
console.log(arrayDiff([{ x: 2 }, { x: 1 }], [{ x: 1 }, { x: '2' }], 'x'))
// => { addList: [{ 'x': '2' }], delList: [{ 'x': 2 }] }

// => { addList: [{ 'x': '2' }], delList: [{ 'x': 2 }] }

const list = [
  { empId: 1, empName: '蔡徐坤' },
  { empId: 2, empName: '小明' },
  { empId: 3, empName: '小红' }
]
const list2 = [
  { empId: 4, empName: '蔡徐坤1' },
  { empId: 2, empName: '小明' },
  { empId: 7, empName: '小军' },
  { empName: '周杰伦' },
  { empName: '小吴' }
]
console.log(arrayDiff(list, list2, 'empId'))
// =>
// {
//   addList: [
// 		 {empId: 4, empName: '蔡徐坤'},
// 		 {empId: 7, empName: '蔡徐坤'},
//     {empName: '周杰伦'},
// 		 {empName: '小吴'}
// 	 ],
// 	 delList: [
// 	   {empId: 1, empName: '蔡徐坤'},
// 	   {empId: 3, empName: '蔡徐坤'}
//   ]
// }
 */
