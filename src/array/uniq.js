import arrayToObj from '@/array/arrayToObj'

/**
 * 数组去重
 * @param list
 * @param {String} PK 如果传入是 Object[] 数据结构，以PK为主键去重
 * @return {*[]}
 */
export const uniq = (list = [], PK) => {
  if (PK) {
    const listObj = arrayToObj(list, PK)
    return [...new Set(list.map(v => v[PK]))].map(v => listObj[v])
  }
  return [...new Set(list)]
}

export default uniq
