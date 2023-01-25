/**
 * 从数组中移除一个元素
 * @param {Array} array
 * @param {*} ele
 * @return {*}
 * @example
 * remove([1, 2, 3, 4, 5], 3)
 * =>
 * [1, 2, 4, 5]
 */
function remove(array = [], ele) {
  const idx = array.indexOf(ele)
  if (~idx) array.splice(idx, 1)
  return array
}

export default remove
