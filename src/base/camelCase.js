/**
 * 将字符串里出现 - _ : 字符链接起来的字符串，统一改成驼峰命名
 * @param {string} arg
 * @returns {*}
 */
function camelCase(arg) {
  const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
  const MOZ_HACK_REGEXP = /^moz([A-Z])/
  return arg
    .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}

export default camelCase
