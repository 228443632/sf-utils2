/**
 * 数组去重
 * @param {any} val
 */
function uniq(val = []) {
  return [...new Set(Array.from(val))]
}

export default uniq
