import camelCase from 'sf-utils2/string/camelCase'
import capitalize from 'sf-utils2/string/capitalize'

/**
 * 大驼峰命名
 * @param {string} str
 * @return {string}
 */
function upperCamelCase(str) {
  return capitalize(camelCase(str))
}

export default upperCamelCase
