/**
 * 过滤收尾带有空格的 字符串
 * @param {string} val
 * @returns {string}
 */
function trim(val) {
  return (val || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export default trim
