/**
 * 过滤收尾带有空格的 字符串
 * @param {string} arg
 * @returns {string}
 */
function trim(arg) {
  return (arg || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export default trim
