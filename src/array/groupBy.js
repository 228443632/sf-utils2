/**
 * 根据给定函数对数组的元素进行分组
 * @param {any[]} arr 原数组
 * @param {(value:any, index: number, array: any[]) => boolean} fn
 * @return {*}
 * @example
 * groupBy([6.1, 4.2, 6.3], Math.floor) // {4: [4.2], 6: [6.1, 6.3]}
 * groupBy(['one', 'two', 'three'], 'length') // {3: ['one', 'two'], 5: ['three']}
 */
function groupBy(arr = [], fn) {
  return arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})
}
export default groupBy
