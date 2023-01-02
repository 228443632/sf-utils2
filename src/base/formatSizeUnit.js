/**
 * 格式化尺寸单位，返回整数
 * @param {string} val
 * @returns {number}
 */
function formatSizeUnit(val) {
  return +String(val).replace(/(rem|px|vw|vh)$/g, '')
}

export default formatSizeUnit
