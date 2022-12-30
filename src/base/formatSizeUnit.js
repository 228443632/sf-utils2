/**
 * 格式化尺寸单位，返回整数
 * @param {string} arg
 * @returns {number}
 */
function formatSizeUnit(arg) {
  return +String(arg).replace(/(rem|px|vw|vh)$/g, '')
}

export default formatSizeUnit
