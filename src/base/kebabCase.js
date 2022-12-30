/**
 * 将驼峰命名改成中横线命名
 * @param {string} str
 * @returns {*}
 */
function kebabCase(str) {
  const hyphenateRE = /([^-])([A-Z])/g
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase()
}

export default kebabCase
