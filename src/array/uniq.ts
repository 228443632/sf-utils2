// @ts-nocheck

import arrayToObj from 'sf-utils2/array/arrayToObj'

/**
 * 数组去重
 * @param {Array|any} list
 * @param {string} [property] 如果传入是 Object[] 数据结构，以property为主键去重
 * @return {*[]}
 */
export const uniq = <T extends Array = any[]>(list: T[] = [], property?: string | string[]): T[] => {
  if (property) {
    const listObj = arrayToObj(list, property)
    return [...new Set(list.map(v => v[property]))].map(v => listObj[v])
  }
  return [...new Set(list)]
}

export default uniq
