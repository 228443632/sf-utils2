/**
 * 将驼峰命名改成中横线命名
 * @param {string} str
 * @returns {*}
 * @example
 * kebabCase('userName') => user-name
 * kebabCase('USERITEM') => u-s-e-r-i-t-e-m
 */
function kebabCase(str) {
  const hyphenateRE = /([^-])([A-Z])/g
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase()
}

export default kebabCase
