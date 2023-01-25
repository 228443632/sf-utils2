import arrayToObj from '@/array/arrayToObj'

/**
 * 数组去重
 * @param {Array} list
 * @param {string|unknown} property 如果传入是 Object[] 数据结构，以property为主键去重
 * @return {*[]}
 */
export const uniq = (list = [], property) => {
  if (property) {
    const listObj = arrayToObj(list, property)
    return [...new Set(list.map(v => v[property]))].map(v => listObj[v])
  }
  return [...new Set(list)]
}

export default uniq
