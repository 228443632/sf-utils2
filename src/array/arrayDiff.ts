// 1@ts-nocheck

import arrayToMap from 'sf-utils2/array/arrayToMap'
import isString from 'sf-utils2/base/isString'
import uniq from 'sf-utils2/array/uniq'
import isArray from 'sf-utils2/base/isArray'
import { TElementType, TPrettifyString, TBiIntersectElementType } from 'sf-utils2/types/generic-helper'

type TSingleOrMultArray<T> = T | T[]

type TResolveCondition<T1 extends any[], T2 extends any[]> = TSingleOrMultArray<
  TPrettifyString<keyof TElementType<T1> | keyof TElementType<T2>>
>

/**
 * 比较两数组之间值的不同，返回新增与删除的元素列表
 *
 * @template T1 旧数组元素类型
 * @template T2 新数组元素类型
 * @param {T1} oldArrayValue 旧数组
 * @param {T2} newArrayValue 新数组
 * @param {TResolveCondition<T1, T2>} [condition] 比较条件，可传单个字段名或多个字段名
 * @returns {{ addList: TBiIntersectElementType<T1, T2>[]; delList: TBiIntersectElementType<T1, T2>[] }} 新增列表与删除列表
 * @example
 * // 无条件：直接比较元素值（输入：旧 [3.1,2.2,1.3]，新 [3.1,4.4,2.5,1.3]）
 * arrayDiff([3.1, 2.2, 1.3], [3.1, 4.4, 2.5, 1.3])
 * // => { addList: [4.4, 2.5], delList: [2.2] }
 *
 * // 指定单个字段比较
 * arrayDiff([{ x: 2 }, { x: 1 }], [{ x: 1 }, { x: '2' }], 'x')
 * // => { addList: [{ x: '2' }], delList: [{ x: 2 }] }
 *
 * // 指定多个字段比较
 * arrayDiff(
 *   [{ empId: 1, empName: '小明' }],
 *   [{ empId: 2, empName: '小红' }],
 *   ['empId']
 * )
 * // => { addList: [{ empId: 2, empName: '小红' }], delList: [{ empId: 1, empName: '小明' }] }
 */
function arrayDiff<T1 extends any[] = any[], T2 extends any[] = any[]>(
  oldArrayValue: T1,
  newArrayValue: T2,
  condition?: TResolveCondition<T1, T2>
) {
  // 转化
  const newArray = oldArrayValue || []
  const oldArray = newArrayValue || []

  const addList = [] as TBiIntersectElementType<T1, T2>[], // 新增的数据
    delList = [] as TBiIntersectElementType<T1, T2>[] // 删除的数据
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

    // @ts-ignore
    let newArrayMap = arrayToMap(newArray, condition, arrayToMapOpts)

    // @ts-ignore
    let oldArrayMap = arrayToMap(oldArray, condition, arrayToMapOpts)
    newArrayMap.forEach((v, k) => {
      if (!oldArrayMap.has(k)) {
        // 删除的

        // @ts-ignore
        delList.push(...v)
      }
    })

    oldArrayMap.forEach((v, k) => {
      if (!newArrayMap.has(k)) {
        // 新增的

        // @ts-ignore
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

// const a: {
//   vueCompPath: string
//   originPath: string
// }[] = []
//
// const b: {
//   vueCompPath: string
//   originPath: string,
//   name: number
// }[] = []
//
// const { addList, delList } = arrayDiff(a, b, ['sss'])
//
// console.log(addList[0].vueCompPath)
//
// delList.forEach(item => {
//   console.log('item', item.originPath)
// })
